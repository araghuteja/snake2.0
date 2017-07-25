document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {           
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;    	
	if(snake.dead)
			reset();
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
			if(snake.directionPower || snake.direction != R)
				snake.direction=L;
        } else {
            /* right swipe */
			if(snake.directionPower || snake.direction != L)
				snake.direction=R;
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
			if(snake.directionPower || snake.direction != U)
				snake.direction=D;
        } else { 
            /* down swipe */
			if(snake.directionPower || snake.direction != D)
				snake.direction=U;
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};