export function astar(grid, startNode, finishNode) {
	const visitedNodesInOrder = [];
	var openSet =[];
	let current = null;
	openSet.push(startNode);
	var gScore = new Array(grid.length).fill(Infinity).map(() => new Array(grid[0].length).fill(Infinity));
    gScore[startNode.row][startNode.col] = 0; 

	var fScore = new Array(grid.length).fill(Infinity).map(() => new Array(grid[0].length).fill(Infinity));
    fScore[startNode.row][startNode.col] = ManhattanDistance(startNode, finishNode); 

	while (openSet.length > 0) {
		current = getSmallestFScoreNode(openSet, fScore);
		visitedNodesInOrder.push(current);

		// checking if current node is goal node, if so - return
		if (current.row == finishNode.row && current.col == finishNode.col) return visitedNodesInOrder;
		openSet.splice(openSet.indexOf(current), 1);
		
		const neighbors = getAllNeighbors(grid, current);
		var tentative_gScore;
		for (var i = 0; i < neighbors.length; i++){
			tentative_gScore = gScore[current.row][current.col] + 1;
			if (tentative_gScore < gScore[neighbors[i].row][neighbors[i].col]){
				neighbors[i].previousNode = current;
				gScore[neighbors[i].row][neighbors[i].col] = tentative_gScore;
				fScore[neighbors[i].row][neighbors[i].col] = gScore[neighbors[i].row][neighbors[i].col] + ManhattanDistance(neighbors[i], finishNode);
				if (!openSet.some(elem => elem.row == neighbors[i].row && elem.col == neighbors[i].col) && !neighbors[i].isWall) {
					openSet.push(neighbors[i]);
				}
			}
		}
	}
	
	return visitedNodesInOrder;
 }

 function getAllNeighbors(grid, current)
 {
	const neighbors = [];
	if (current.row + 1 < grid.length)
		neighbors.push(grid[current.row+1][current.col])
	if (current.row - 1 >= 0)	
		neighbors.push(grid[current.row - 1][current.col])
	if (current.col + 1 < grid[0].length)	
		neighbors.push(grid[current.row][current.col + 1])	 
	if (current.col - 1 >= 0)	
		neighbors.push(grid[current.row][current.col - 1])
	
	return neighbors;
 }

 function getSmallestFScoreNode(openSet, fScore){
	var f = Infinity;
	var ind = 0;
	
	for (var i = 0; i < openSet.length; i++){
		if (fScore[openSet[i].row][openSet[i].col] < f){
			f = fScore[openSet[i].row][openSet[i].col];
			ind = i;
		}
	}

	return openSet[ind];
 }

function ManhattanDistance(Point, Goal)
	{	// linear movement - no diagonals - just cardinal directions (NSEW)
		return Math.abs(Point.row - Goal.row) + Math.abs(Point.col - Goal.col);
	}
