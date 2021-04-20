export function depthFirstSearch(grid, startNode, finishNode) {
    var visitedNodesInOrder = [];
    let current = startNode;

    visitedNodesInOrder = DFSrecursive(grid, current, visitedNodesInOrder, finishNode);

    return visitedNodesInOrder;

}

function DFSrecursive(grid, current, visitedNodesInOrder, finishNode){
    visitedNodesInOrder.push(current);
    const neighbors = getAllNeighbors(grid, current, visitedNodesInOrder, finishNode);
    console.log(current);
    if (visitedNodesInOrder[visitedNodesInOrder.length - 1].row === finishNode.row && visitedNodesInOrder[visitedNodesInOrder.length - 1].col === finishNode.col){
        return visitedNodesInOrder;
    }

    for (var i = 0; i < neighbors.length; i++){
        if (!visitedNodesInOrder.some(elem => elem.row === neighbors[i].row && elem.col === neighbors[i].col) && !neighbors[i].isWall){
            neighbors[i].previousNode = current;
            visitedNodesInOrder = DFSrecursive(grid, neighbors[i], visitedNodesInOrder, finishNode);
            if (visitedNodesInOrder[visitedNodesInOrder.length - 1].row === finishNode.row && visitedNodesInOrder[visitedNodesInOrder.length - 1].col === finishNode.col){
                return visitedNodesInOrder;
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