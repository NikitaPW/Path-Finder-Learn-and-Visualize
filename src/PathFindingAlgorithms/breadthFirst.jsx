export function breadthFirst(grid, startNode, finishNode)
{
    const visitedNodesInOrder = [];
    let current = null;
    var queue = [];
    queue.push(startNode);

    while (queue.length > 0)
    {
        current = queue.shift();
        visitedNodesInOrder.push(current);
        if (current.row === finishNode.row && current.col === finishNode.col){
            return visitedNodesInOrder;
        }
        const neighbors = getAllNeighbors(grid, current);
        for (var i = 0; i < neighbors.length; i++){
            if (!visitedNodesInOrder.some(elem => elem.row === neighbors[i].row && elem.col === neighbors[i].col) && !queue.some(elem => elem.row === neighbors[i].row && elem.col === neighbors[i].col) && !neighbors[i].isWall) {
                neighbors[i].previousNode = current;
                queue.push(neighbors[i]);
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