var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;

var board , white , black;

var boardImg , whiteImg , blackImg

function preload(){
  boardImg = loadImage("images/board.png");
  whiteImg = loadImage("images/white.png");
  blackImg = loadImage("images/black.png"); 
}

function setup(){
  canvas = createCanvas(displayWidth/2 , displayHeight/2 );
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
