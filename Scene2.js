class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }


    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        //plaTforms
        platforms = this.physics.add.staticGroup();
        platforms.create(300, 800, 'ground').setScale(2).refreshBody();

        platforms.create(650, 500, 'ground');
        platforms.create(50, 350, 'ground');
        platforms.create(750, 320, 'ground');
        platforms.create(50, 660, 'ground');



        player = this.physics.add.sprite(100, 700, 'dude');
        player.setBounce(0.3);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });


        cursors = this.input.keyboard.createCursorKeys();

        spikes = this.physics.add.group({
            key: 'spikes',
            repeat: 5,
            setXY: { x: 11, y: 400, stepX: 30, }


        });

        stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        stars.children.iterate(function (child) {


            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });
        bombs = this.physics.add.group();

        //  The score
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);
        this.physics.add.collider(spikes, platforms)
        this.physics.add.collider(bombs, platforms);

        this.physics.add.overlap(player, stars, collectStar, null, this);

        this.physics.add.collider(player, bombs, hitBomb, null, this);

        this.physics.add.collider(player, spikes, hitSpikes, null, this);

        this.add.text(200, 20, "Welcome to the Game", { font: "25px Arial", fill: "yellow" })
    }// need to end the create function

    // don't need the keyword function in front of update
    update() {
        if (gameOver) {
            return;
        }

        if (cursors.left.isDown) {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }
    }

    // don't need the keyword function in front of collectStar
    collectStar(player, star) {
        star.disableBody(true, true);
        score += 1;
        scoreText.setText('Score: ' + score);

        if (stars.countActive(true) === 0) {
            //  A new batch of stars to collect
            stars.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);

            });

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);


            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;

        }
    }
    // don't need the function keyword in front of hitSpikes
    hitSpikes(player, spikes) {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        gameOver = true;
    }
    // don't need the keyword function in front of hitBomb
    hitBomb(player, bomb) {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        gameOver = true;
    }
    // } // don't need this curly brace
}