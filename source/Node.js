function Node(scene, src, width, height) {
	//for dijstras algorithm
	var isVisited = false;
	//is this variable is true, then the "wall" barrier image will be displayed and that node is no longer walkable
	var isClicked = false;
	
	var aNode = new Sprite(scene, src, width, height);
	
	return aNode;
}