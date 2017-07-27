/**
 * 
 */
var snake, food, colour, reversePower;
var scoreText = 'SCORE :', deadText = "Dead :'( \nClick to Try Again";
const L=1, R=2, D=4, U=8;

function reset(){
	if(horz > vert)
		var px = self.innerHeight/45, horz = self.innerWidth/px, vert = 45;
	else
		var px = self.innerHeight/60, horz = 60, vert = self.innerHeight/px;
	console.log("Reset");
	snake = new Snake();
	food = new Food();
	colour = new Colour();
	reversePower = new ReversePower();
}

function setup() {
	createCanvas(horz * px, vert * px);
	noStroke();
	frameRate(10);
	reset();
	textAlign(RIGHT);
}

function draw() {
	background(54, 53, 55);
	if(snake.dead){
		text(deadText, horz/2*px, vert/2*px);	
		return;
		}
	fill(0, 100, 0);
	rect(px, px, (horz-2)*px, (vert-6)*px);
	rect(px, (vert-4)*px, (horz-2)*px, 3*px);
	if(food.createFood){
		food.update();
	}
	if(snake.ate(food)){
		food.createFood =true;
	}
	if(snake.powerCount%reversePower.powerValue==0){
		reversePower.update();
		snake.powerCount = 1;
	}
	if(reversePower.showPower)
		snake.tookPower(reversePower);
	if(reversePower.showPower)
		reversePower.draw();
	if(reversePower.acquiredPower)
		snake.limitPower(reversePower);
	snake.update();
	food.draw();
	snake.draw();
	score = snake.length;
	scoreWidth = textWidth(score);
	fill(250);
	textSize(px*2);
	textFont("Helvetica");
	text(scoreText, 10*px, (vert-2)*px);
	text(score, 11*px+scoreWidth, (vert-2)*px);	
}

function keyPressed() {
	if (keyCode === LEFT_ARROW && (snake.directionPower || snake.direction != R)) {
		snake.direction=L;
	} else if (keyCode === RIGHT_ARROW && (snake.directionPower || snake.direction != L)) {
		snake.direction=R;
	} else if (keyCode === UP_ARROW && (snake.directionPower || snake.direction != D)) {
		snake.direction=D;
	} else if (keyCode === DOWN_ARROW && (snake.directionPower || snake.direction != U)) {
		snake.direction=U;
	}
}

