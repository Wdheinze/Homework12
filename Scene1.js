class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }

    preload() {
        this.load.image("background", "assets/background.jpg");

        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('ball', 'assets/ball.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('spikes', 'assets/spikes.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });

    }

    create() {
        this.add.text(200, 20, "Game is Loading...");
        this.scene.start("playGame");
    }
}