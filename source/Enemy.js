function Enemy(canvas, src, width, height) {
	
	var aEnemy = new Sprite(canvas, src, width, height);
	aEnemy.setSpeed(10);
	aEnemy.setBoundAction(3);
	
	
	return aEnemy;
}