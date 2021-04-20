export function greedy(grid, startNode, finishNode){
    const visitedNodesInOrder = [];
	var openSet =[];
	let current = null;
	openSet.push(startNode);

    var heuristic = new Array(grid.length).fill(Infinity).map(() => new Array(grid[0].length).fill(Infinity));
    heuristic[startNode.row][startNode.col] = ManhattanDistance(startNode, finishNode); 

    while (openSet.length > 0) {
        console.log("weq");
		current = getSmallestHeuristic(openSet, heuristic);
		visitedNodesInOrder.push(current);

		// checking if current node is goal node, if so - return
		if (current.row == finishNode.row && current.col == finishNode.col) return visitedNodesInOrder;
		openSet.splice(openSet.indexOf(current), 1);
        console.log(openSet.length);
		
		const neighbors = getAllNeighbors(grid, current);
		var tentative_hScore;
        var neighbor_hScore;
		for (var i = 0; i < neighbors.length; i++){
            console.log("qweasd");
			tentative_hScore = heuristic[current.row][current.col];
            neighbor_hScore = ManhattanDistance(neighbors[i], finishNode);
			
				
				if (!visitedNodesInOrder.some(elem => elem.row == neighbors[i].row && elem.col == neighbors[i].col) && !openSet.some(elem => elem.row == neighbors[i].row && elem.col == neighbors[i].col) && !neighbors[i].isWall) {
                    neighbors[i].previousNode = current;
				    heuristic[neighbors[i].row][neighbors[i].col] = neighbor_hScore
					openSet.push(neighbors[i]);
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

function getSmallestHeuristic(openSet, heuristic){
	var h = Infinity;
	var ind = 0;
	
	for (var i = 0; i < openSet.length; i++){
		if (heuristic[openSet[i].row][openSet[i].col] < h){
			h = heuristic[openSet[i].row][openSet[i].col];
			ind = i;
		}
	}

	return openSet[ind];
 }

function ManhattanDistance(Point, Goal)
{	// linear movement - no diagonals - just cardinal directions (NSEW)
	return Math.abs(Point.row - Goal.row) + Math.abs(Point.col - Goal.col);
}