var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var spaceships, spaceship1, spaceship2, spaceship3, spaceship4;

function preload(){
  sp1img=loadImage("sp.png");
  sp2img=loadImage("sp1.png");
  sp3img=loadImage("sp2.png");
  sp4img=loadImage("sp3.png");
  background=loadImage( "bg.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
