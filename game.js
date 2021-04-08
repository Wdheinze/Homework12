var config = {
    width: 600,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2]

}
var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
window.onload = function () {
    var game = new Phaser.Game(config);
}

//Code
function preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('spikes', 'assets/spikes.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}
