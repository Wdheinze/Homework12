class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }


    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        //plaTforms
        platforms = this.physics.add.staticGroup();
        platforms.create(100, 800, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');
        platforms.create(800, 220, 'ground');


        player = this.physics.add.sprite(100, 450, 'dude');
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

        this.physics.add.collider(bombs, platforms);



        this.add.text(200, 20, "Game is Loaded", { font: "25px Arial", fill: "yellow" })
    }
}