function ReversePower() {
	this.pos = createVector();
	this.showPower = false;
	this.acquiredTime = 0;
	this.acquiredPower = false;
	this.powerValue = 10;
	this.draw = function(){		
		fill(130, 120, 59);
		rect(this.pos.x*px, this.pos.y*px, px, px, 5);
		fill(250);
		textAlign(RIGHT);
		textSize(px);
		text("R", this.pos.x*px, this.pos.y*px, px, px);
	}
	this.update = function(){
		this.pos.x = floor(random(1, horz-1));
		this.pos.y = floor(random(1, vert-5));
		this.showPower = true;
	}
}