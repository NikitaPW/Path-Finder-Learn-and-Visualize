export function recursiveDivisionMaze(grid, startNode, finishNode, rowStart, colStart, rowFinish, colFinish, orientation, surroundingWalls) {
  var visitedNodesInOrder = [];

  visitedNodesInOrder = recursiveDivisionMazeWorker(grid, startNode, finishNode, rowStart, colStart, rowFinish, colFinish, orientation, surroundingWalls, visitedNodesInOrder);

  return visitedNodesInOrder;
}

function recursiveDivisionMazeWorker(grid, startNode, finishNode, rowStart, colStart, rowFinish, colFinish, orientation, surroundingWalls, visitedNodesInOrder){
  if (rowFinish < rowStart || colFinish < colStart) {
    return visitedNodesInOrder;;
  }

  if (orientation === "horizontal") {
    let possibleRows = [];
    for (let number = rowStart; number <= rowFinish; number += 2) {
      possibleRows.push(number);
    }
    let possibleCols = [];
    for (let number = colStart - 1; number <= colFinish + 1; number += 2) {
      possibleCols.push(number);
    }
    let randomRowIndex = Math.floor(Math.random() * possibleRows.length);
    let randomColIndex = Math.floor(Math.random() * possibleCols.length);
    let currentRow = possibleRows[randomRowIndex];
    let colRandom = possibleCols[randomColIndex];
    for (let r = 1; r <= grid.length - 2; r++) {
      for (let c = 1; c <= grid[0].length - 2; c++) {
        if (r === currentRow && c !== colRandom && c >= colStart - 1 && c <= colFinish + 1) {
          if (!grid[r][c].isStart && !grid[r][c].isFinish) {
            if (!visitedNodesInOrder.includes(grid[r][c]))
              visitedNodesInOrder.push(grid[r][c]);
          }
        }
      }
    }
    if (currentRow - 2 - rowStart > colFinish - colStart) {
      visitedNodesInOrder = recursiveDivisionMazeWorker(grid,startNode,finishNode, rowStart, colStart, currentRow - 2,colFinish, orientation,surroundingWalls,visitedNodesInOrder);
    } else {
      visitedNodesInOrder = recursiveDivisionMazeWorker(grid,startNode,finishNode, rowStart, colStart, currentRow - 2,colFinish,"vertical",surroundingWalls,visitedNodesInOrder );
    }
    if (rowFinish - (currentRow + 2) > colFinish - colStart) {
      visitedNodesInOrder = recursiveDivisionMazeWorker(grid,startNode,finishNode,currentRow + 2,colStart,rowFinish,colFinish,orientation,surroundingWalls,visitedNodesInOrder);
    } else {
      visitedNodesInOrder = recursiveDivisionMazeWorker(grid,startNode,finishNode,currentRow + 2,colStart,rowFinish,colFinish, "vertical",surroundingWalls,visitedNodesInOrder);
    }
  } else {
    let possibleCols = [];
    for (let number = colStart; number <= colFinish; number += 2) {
      possibleCols.push(number);
    }
    let possibleRows = [];
    for (let number = rowStart - 1; number <= rowFinish + 1; number += 2) {
      possibleRows.push(number);
    }
    let randomColIndex = Math.floor(Math.random() * possibleCols.length);
    let randomRowIndex = Math.floor(Math.random() * possibleRows.length);
    let currentCol = possibleCols[randomColIndex];
    let rowRandom = possibleRows[randomRowIndex];
    for (let r = 1; r <= grid.length - 3; r++) {
      for (let c = 1; c <= grid[0].length - 3; c++) {
        if (c === currentCol && r !== rowRandom && r >= rowStart - 1 && r <= rowFinish + 1) {
          if (!grid[r][c].isStart && !grid[r][c].isFinish) {
            if (!visitedNodesInOrder.includes(grid[r][c]))
              visitedNodesInOrder.push(grid[r][c]);
          }
        }
      }
    }
    if (rowFinish - rowStart > currentCol - 2 - colStart) {
      visitedNodesInOrder = recursiveDivisionMazeWorker(grid,startNode,finishNode,rowStart,colStart,rowFinish,currentCol - 2, "horizontal",surroundingWalls,visitedNodesInOrder );
    } else {
      visitedNodesInOrder = recursiveDivisionMazeWorker(grid,startNode,finishNode,rowStart,colStart,rowFinish,currentCol - 2,orientation,surroundingWalls,visitedNodesInOrder);
    }
    if (rowFinish - rowStart > colFinish - (currentCol + 2)) {
      visitedNodesInOrder = recursiveDivisionMazeWorker(grid,startNode,finishNode,rowStart,currentCol + 2, rowFinish, colFinish,"horizontal",surroundingWalls,visitedNodesInOrder);
    } else {
      visitedNodesInOrder = recursiveDivisionMazeWorker(grid,startNode,finishNode,rowStart,currentCol + 2, rowFinish,colFinish,orientation,surroundingWalls,visitedNodesInOrder);
    }
    
  }
  return visitedNodesInOrder;
}
