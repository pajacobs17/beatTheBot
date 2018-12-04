function Player(canvas, src, width, height, walls) {

	var aPlayer = new Sprite(canvas, src, width, height);

	aPlayer.setSpeed(5);
	aPlayer.setBoundAction(STOP);

	aPlayer.walls = walls;

	aPlayer.checkKeys = function () {
		//temporary function for testing
		if (keysDown[K_UP]) {
			this.changeYby(-6);
			this.setImage("../images/EskimoBack.png")
		}

		if (keysDown[K_DOWN]) {
			this.changeYby(6);
			this.setImage("../images/EskimoFront.png")
		}

		if (keysDown[K_LEFT]) {
			this.changeXby(-6);
			this.setImage("../images/EskimoLeft.png")
		}

		if (keysDown[K_RIGHT]) {
			this.changeXby(6);
			this.setImage("../images/EskimoRight.png")
		}
	} // end checkKeys



	return aPlayer;
}