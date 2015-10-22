// illustration.js

// set var

var backgroundImg;
var pigeonImg;
var pigeonpooImg;
var pooImg;
var watersplashImg;
var birdsImg;

var pigeonX = -100
var birdsX = -300
var pooY = 130

//upload images

function preload() {
	backgroundImg = loadImage("background1.png");
	pigeonImg = loadImage("pigeon1.jpg");
	pigeonpooImg = loadImage("pigeonpoopose.jpg");
	pooImg = loadImage("poo.jpg");
	watersplashImg = loadImage("watersplash.jpg");
	birdsImg = loadImage("birds.jpg");
}


function setup() {
	createCanvas(800, 600);
}

function draw() {
	// set up background images

	image(backgroundImg, 0, 0);

	// animating

	var pooX;
	var watertouch = 396

	if (pooY > 385) {
		image(watersplashImg, pigeonX, watertouch);
	}

	if (mouseIsPressed) {
		pooX = mouseX;
		pooY += 5;
		if (pooY > 430) {
			pooY = 120;
		}
	}
	image(pooImg, pigeonX + 45, pooY);

	//animate pigeon & birds
	birdsX -= 0.6;
	if (birdsX < -10) {
		birdsX = 600;
	}
	image(birdsImg, birdsX, 120);

	pigeonX += 1;
	if (pigeonX > 607) {
		pigeonX = -100;
	}
	image(pigeonImg, pigeonX, 100);
	if (mouseIsPressed) {
		image(pigeonpooImg, pigeonX, 100);
	}

}
