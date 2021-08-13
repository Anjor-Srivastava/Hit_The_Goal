var canvas = new fabric.Canvas("myCanvas");

var ball_y = 0;
var ball_x = 0;
var hole_y = 400;
var hole_x = 800;

var block_image_width = 50;
var block_image_height = 50;

var ball_obj, hole_obj, left_cheer_obj, right_cheer_obj;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(block_image_width);
		hole_obj.scaleToHeight(block_image_height);
		hole_obj.set({
			top: hole_y,
			left: hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(block_image_width);
		ball_obj.scaleToHeight(block_image_height);
		ball_obj.set({
			top: ball_y,
			left: ball_x
		});
		canvas.add(ball_obj);
	});
}

function left_cheer() {
	fabric.Image.fromURL("cheer_left.png", function(Img) {
		left_cheer_obj = Img;
		left_cheer_obj.scaleToWidth(300);
		left_cheer_obj.scaleToHeight(300);
		left_cheer_obj.set({
			top: 0,
			left: 0
		});
		canvas.add(left_cheer_obj);
	});
}

function right_cheer() {
	fabric.Image.fromURL("cheer_right.png", function(Img) {
		left_cheer_obj = Img;
		left_cheer_obj.scaleToWidth(300);
		left_cheer_obj.scaleToHeight(300);
		left_cheer_obj.set({
			top: 0,
			left: 750
		});
		canvas.add(left_cheer_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (ball_x == hole_x && ball_y == hole_y) 
	{
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "you have hit a goal!";
		document.getElementById("myCanvas").style.borderColor = "red";
		left_cheer();
		right_cheer();
	}
	else
	{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
}

function up()
{
	if (ball_y > 0) 
	{
		ball_y = ball_y - block_image_height;
		console.log(" ");
		console.log("Block Image Height = " + block_image_height);
		console.log("When Up Arrow Key Is Pressed, X = " + ball_x + " Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

function down()
{
	if ( ball_y < 450) 
	{
		ball_y = ball_y + block_image_height;
		console.log(" ");
		console.log("Block Image Height = " + block_image_height);
		console.log("When Down Arrow Key Is Pressed, X = " + ball_x + " Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

function left()
{
	if(ball_x > 5)
	{
		ball_x = ball_x - block_image_width;
		console.log(" ");
		console.log("Block Image Width = " + block_image_width);
		console.log("When Up Left Key Is Pressed, X = " + ball_x + " Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

function right()
{
	if(ball_x < 1050)
	{
		ball_x = ball_x + block_image_width;
		console.log(" ");
		console.log("Block Image Width = " + block_image_width);
		console.log("When Up Right Key Is Pressed, X = " + ball_x + " Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

if (screen.width < 992) {
	document.getElementById("nan").style.display = "block";
} else {
	document.getElementById("avail").style.display = "block";
	document.body.style.backgroundImage = 'url("Grass.jpg")';
}