function Node(scene, src, width, height) {
	
	var aNode = new Sprite(scene, src, width, height);
	
	//for dijstras algorithm
	aNode.isVisited = false;
	//is this variable is true, then the "wall" barrier image will be displayed and that node is no longer walkable
	aNode.isWall = false;
	
	aNode.neighbors = [];
	
	aNode.makeWall = function () {
		if(aNode.isWall == false) {
			aNode.isWall = true;
			aNode.cost = Infinity;
			aNode.setImage("../images/Wall.jpg");
		}
	}
	
	
	return aNode;
}