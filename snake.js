/**
 * 
 */
function Snake() {
	this.pos = createVector(1,1);
	this.posArray = [];
	this.length = 1;
	this.dead = false;
	this.direction = R;
	this.powerCount = 1;
	this.directionPower=false;
	
	this.posArray.push(this.pos);	
	
	this.overlap = function(){
			if(this.pos.x==horz-1 || this.pos.y==vert-5 || this.pos.x==0 || this.pos.y==0)
				return false;
			return true;
	}
	
	this.update = function(){
		
		if(this.dead){
			return;
		}

		switch(this.direction){
			case L:
				this.pos.x--;
				break;
			case R:
				this.pos.x++;
				break;
			case U:
				this.pos.y++;
				break;
			case D:
				this.pos.y--;
				break;
		}
		
		if(!this.overlap()){
			this.dead = true;
		}else{
			this.posArray.push(createVector(this.pos.x, this.pos.y));
		}
	}
	this.draw = function(){
		console.log()
		len=this.posArray.length-1;
		for(j=0; j<this.length; j++){
			fill(255, 242, 117);
			if(this.directionPower)
				fill(155, 142, 217);
			rect(this.posArray[len-j].x*px, this.posArray[len-j].y*px, px, px);
		}
	}
	this.ate = function(f){
		if(this.pos.x==f.pos.x && this.pos.y==f.pos.y){
			this.powerCount++;
			return this.length++;
		}
		return false;
	}
	this.tookPower = function(p){
		if(this.pos.x==p.pos.x && this.pos.y==p.pos.y){
			console.log("took pow")
			p.showPower = false;
			p.acquiredPower = true;
			p.acquiredTime = millis();
			this.directionPower = true;
			return true;
		}
			return false;
	}
	this.limitPower = function(p){
		if(millis() - p.acquiredTime > 5000){
			p.showPower = false;
			p.acquiredPower = false;
			this.directionPower = false;
			this.powerCount = 1;
		}
	}
}