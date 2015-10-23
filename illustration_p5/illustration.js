// illustration.js

// set var

var backgroundImg;
var pigeonImg;
var pigeonpooImg;
var pooImg;
var watersplashImg;
var birdsImg;

var pigeonX = -100;
var cloudX = -300;
var pooY = 130;

//upload images

function preload() {
	backgroundImg = loadImage("background1.png");
	pigeonImg = loadImage("pigeon1.png");
	pigeonpooImg = loadImage("pigeonpoopose.png");
	pooImg = loadImage("poo.png");
	watersplashImg = loadImage("watersplash.png");
	pigeontwoImg = loadImage("pigeon2.png");
	cloudImg = loadImage("clouds.png");
	waterImg = loadImage("water.png")
}


function setup() {
	createCanvas(800, 600);

}

function draw() {
	// set up background images

	image(backgroundImg, 0, 0);
	image(waterImg, 0, 300);
	// animating poo touching water
	if (mouseIsPressed) {
		pooX = mouseX;
		pooY += 5;
		if (pooY > 430) {
			pooY = 120;
		}
	}
	image(pooImg, pigeonX + 45, pooY);

	var pooX;
	var watertouch = 396

	if (pooY > 385) {
		image(watersplashImg, pigeonX - 40, watertouch);
	}


	//animate clouds
	cloudX += 0.6;
	if (cloudX > 620) {
		cloudX = -20;
	}
	image(cloudImg, cloudX, 20);

	//animate pigeon

	if (mouseIsPressed) {
		image(pigeonpooImg, pigeonX, 70);
	} else {
		var pigeonfly = random(1);
		pigeonX -= 1;
		if (pigeonX < -10) {
			pigeonX = 605;
		}
		if (pigeonfly < 0.5) {
			image(pigeonImg, pigeonX, 60);
		} else {
			image(pigeontwoImg, pigeonX, 100);
		}
	}

}
