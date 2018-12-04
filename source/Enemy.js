function Enemy(canvas, src, width, height) {
	
	var aEnemy = new Sprite(canvas, src, width, height);
	aEnemy.setSpeed(8);
	aEnemy.setBoundAction(3);
	
	//calculates the next node to move towards and then the movement in the x and y axis required to go towards
	//that node. Sets the enemy to move in that x and y direction
	aEnemy.nextMove = function(start, goal) {
		//keeps track of the currentBest neighborNode (given by its index of the start node) and its distance from the player
		//initial best value is null with a cost of infinity
		var currentBest = [null, Infinity];
		for(var i = 0; i < start.neighbors.length; i++) {
			var xLeft = Math.abs(goal.x - start.neighbors[i].x);
			var yLeft = Math.abs(goal.y - start.neighbors[i].y);
			
			value = xLeft + yLeft;
			//the current value will be replaced if it is higher
			if(value < currentBest[1]) {
				currentBest[0] = i;
				currentBest[1] = value;
			}
		}
		console.log(currentBest);
		aEnemy.calculateMove(start, currentBest);
	}
		
	aEnemy.calculateMove = function(start, currentBest) {
			//get the node that the enemy will now be moving towards
			var moveTowards = start.neighbors[currentBest[0]];
			//now to calculate the movement in the x and y required for the enemy
			var x = moveTowards.x - start.x;
			var y = moveTowards.y - start.y;
		}
		
	return aEnemy;
}