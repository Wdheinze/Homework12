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
var spikes;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var collectStar;
var hitSpikes;
var hitBomb;
var scoreText;
window.onload = function () {
    var game = new Phaser.Game(config);
}


