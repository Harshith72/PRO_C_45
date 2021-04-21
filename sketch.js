/*
Pro-C-43: self Design Game Stage-1
planing the game
figuring out the game and its design
sketiching out the characters
naming all the characters 

pro-C-44: self Desing Game Stage-2
deciding on images of the game
adding them to our folder
making the required folders for the game
create the basic game structure
create basic structure of characters
function setup 

pro-C-45: self Design Game Stage-3
adding all the images to the sprites creatred 
making a form before the game starts so to store the players name
adding distance when up_Arrow is pressed 
making gamestates for starting and ending of the game 

*/

//variable declaration
var canvas;
var car1, car2, cars;
var road;
var roadImg, car1Img, car2Img, img;
var form;
var game, gameState;
var carsAtFinishLine;
var database;
var player, playerCount, allPlayers;


function preload() {
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  roadImg = loadImage("images/road.png");
  img = loadImage("images/image.jpg");
}


function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);

  database = firebase.database();
  carsAtFinishLine = 0;

  gameState = 0;
  game = new Game();
  game.getState();
  game.start();

}

function draw() {

  if (playerCount == 2) {
    game.updateState(1);
  }

  if (gameState == 1) {
    clear();
    game.play();
  }

  if (gameState == 2) {
    game.end();
  }

}

