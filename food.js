/**
 * 
 */
function Food() {
	this.pos = createVector();
	this.createFood = true;
	this.draw = function(){
		fill(219, 37, 85);
		ellipseMode(CENTER);
		ellipse(this.pos.x*px+0.5*px, this.pos.y*px+0.5*px, px, px);
	}
	this.update = function(){
		this.pos.x = floor(random(1, horz-1));
		this.pos.y = floor(random(1, vert-5));
		this.createFood = false;
	}
}