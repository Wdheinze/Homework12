class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }

    preload() {
        this.load.image("background", "assets/background.jpg");
    }

    create() {
        this.add.text(200, 20, "Game is Loading...");
        this.scene.start("playGame");
    }
}