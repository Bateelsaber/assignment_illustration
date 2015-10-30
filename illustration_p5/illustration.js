// illustration.js

// set var

var backgroundImg;
var pigeonImg;
var pigeonpooImg;
var pooImg;
var watersplashImg;
var cloudImg;
var pigeontwoImg;
var waterImg

var pigeonX = -100;
var cloudX = -300;
var pooY = 130;
var waterX = -10;
var waterlayerx = 10;

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

	waterX += 0.2;
	if (waterX > 10) {
		waterX = -10;
	}
	image(waterImg, waterX, 300);

	waterlayerx -= 0.2;
	if (waterlayerx < -10) {
		waterlayerx = 10;
	}
	image(waterImg, waterlayerx, 370);


	// animating poo touching water
	if (mouseIsPressed &&
		mouseX > pigeonX - 20 &&
		mouseX < pigeonX + 150 &&
		mouseY > 80 &&
		mouseY < 200) {
		pooX = mouseX;
		pooY += 5;

	}
	image(pooImg, pigeonX + 45, pooY);
	if (pooY > 430) {
		pooY = 120;
	}


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

	if (mouseIsPressed &&
		mouseX > pigeonX - 20 &&
		mouseX < pigeonX + 150 &&
		mouseY > 80 &&
		mouseY < 200) {
		image(pigeonpooImg, pigeonX, 70);
	} else {
		frameRate(30);
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
