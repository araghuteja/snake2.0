function Shape() {
	this.pos = createVector();
	this.draw = function(){
		fill(130, 120, 59);
		rect(10*px, 10*px, px, px, 5);
		fill(250);
		textSize(px);
		text("T", 10*px+2, 10*px, px, px);
		
	}
}