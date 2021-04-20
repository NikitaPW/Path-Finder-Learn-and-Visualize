import React, {Component} from 'react';
import Node from "./Node/Node";
import "./PathFindingVisualization.css";
import {dijkstra, getNodesInShortestPathOrder} from '../PathFindingAlgorithms/dijkstra.jsx';
import {breadthFirst} from '../PathFindingAlgorithms/breadthFirst.jsx';
import {depthFirstSearch} from '../PathFindingAlgorithms/depthFirstSearch.jsx';
import {greedy} from '../PathFindingAlgorithms/greedy.jsx';
import {astar} from '../PathFindingAlgorithms/astar.jsx';
import Dropdown from 'react-css-dropdown';
import 'react-css-dropdown/dist/index.css';
import { recursiveDivisionMaze } from "../MazeAlgorithms/RecursiveDivisionAlgorithm";

export default class PathFindingVisualization extends Component {
    constructor() {
        super();
        this.state = {
            grid:[],
            changingStart: false,
            changingFinish: false,
            mouseIsPressed: false,
            start_node_row: 12,
            start_node_col: 20, 
            finish_node_row: 12,
            finish_node_col: 39,
            chosen_algorithm: 'dijkstra',
        };
    }

    componentDidMount() {
      const grid = this.getInitialGrid();
      this.setSurroundingWalls();
    }

    handleMouseDown(row, col) {
      if (row === this.state.start_node_row && col === this.state.start_node_col){
        this.setState({changingStart: true});
        this.setState({mouseIsPressed: true});
      }
      else if (row === this.state.finish_node_row && col === this.state.finish_node_col){
        this.setState({changingFinish: true});
        this.setState({mouseIsPressed: true});
      }
      else if (row != 0 && row != 24 && col != 0 && col != 59){
        const newGrid = this.getNewGridWithWallToggled(this.state.grid, row, col);
        this.setState({grid: newGrid});
        this.setState({mouseIsPressed: true});
      }
    } 

    handleMouseEnter(row, col) {
      if (!this.state.mouseIsPressed) return;
      let newGrid = null;
      if (row != 0 && row != 24 && col != 0 && col != 59 && !this.state.changingStart && !this.state.changingFinish){
        newGrid = this.getNewGridWithWallToggled(this.state.grid, row, col);
        this.setState({grid: newGrid});
      }
      else if (this.state.changingStart && row != this.state.finish_node_row && col != this.state.finish_node_col){
        newGrid = this.getNewGridWithStartMoved(this.state.grid, row, col);
        this.setState({grid: newGrid});
      }
      else if (this.state.changingFinish && row != this.state.start_node_row && col != this.state.start_node_col){
        newGrid = this.getNewGridWithFinishMoved(this.state.grid, row, col);
        this.setState({grid: newGrid});
      }
    }

    handleMouseUp() {
      this.setState({mouseIsPressed: false});
      this.setState({changingStart: false});
      this.setState({changingFinish: false});
    }

    animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder) {
      for (let i = 0; i <= visitedNodesInOrder.length; i++) {
        if (i === visitedNodesInOrder.length) {
          setTimeout(() => {
            this.animateShortestPath(nodesInShortestPathOrder);
          }, 15 * i);
          return;
        }
        setTimeout(() => {
          const node = visitedNodesInOrder[i];
          if ((node.row != this.state.start_node_row || node.col != this.state.start_node_col) && (node.row != this.state.finish_node_row || node.col != this.state.finish_node_col)) {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              'node node-visited';
          }
        }, 15 * i);
      }
    }
  
    createMaze() {
      let visitedNodesInOrder = recursiveDivisionMaze(this.state.grid, this.state.grid[this.state.start_node_row][this.state.start_node_col], this.state.grid[this.state.finish_node_row][this.state.finish_node_col], 1, 1,this.state.grid.length - 2, this.state.grid[0].length - 2,"vertical", false);
      this.animateMaze(visitedNodesInOrder);
    }
  
  animateMaze(visitedNodesInOrder) {
    let node = null;
      for (let i = 0; i < visitedNodesInOrder.length; i++) {
        setTimeout(() => {
          node = visitedNodesInOrder[i];
              document.getElementById(`node-${node.row}-${node.col}`).className =
            'node node-wall';
          
        }, 15 * i);
      }
      this.setWalls(visitedNodesInOrder);
    };
    setWalls(visitedNodesInOrder) {
      let newGrid = this.state.grid.slice();
      visitedNodesInOrder.forEach(wall => {
        newGrid[wall.row][wall.col] = {
          ...wall,
          isWall: true,
        }
      });

      this.setState({ grid: newGrid });
    };
    createNode = (col, row) => {
      return {
        col,
        row,
        isStart: row === this.state.start_node_row && col === this.state.start_node_col,
        isFinish: row === this.state.finish_node_row && col === this.state.finish_node_col,
        distance: Infinity,
        isVisited: false,
        isWall: false,
        previousNode: null,
        f: Infinity,
        g: Infinity, 
        h: Infinity
      };
  };
  
    
  
   getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 25; row++) {
      const currentRow = [];
      for (let col = 0; col < 60; col++) {
        var node = this.createNode(col, row);
        if (row === 0 || row === 24 || col === 0 || col === 59)
          node.isWall = true;
        currentRow.push(node);
      }
      grid.push(currentRow);
    }
     this.setState({ grid });

     
     
  };

  setSurroundingWalls() {
    setTimeout(() => {
    for (let row = 0; row < 25; row++) {
      for (let col = 0; col < 60; col++) {
        
        let node = this.state.grid[row][col];
        if (row === 0 || row === 24 || col === 0 || col === 59) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            'node node-wall';
          }
        
      }
      }
    }, 50 );
    
  }
  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        if ((node.row != this.state.start_node_row || node.col != this.state.start_node_col) && (node.row != this.state.finish_node_row || node.col != this.state.finish_node_col)) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            'node node-shortest-path';
        }
      }, 50 * i);
      
    }
  }

  getNewGridWithFinishMoved = (grid, row, col) => {
    if (row === this.state.finish_node_row && col === this.state.finish_node_col) return;
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const previousFinish = {
      ...grid[this.state.finish_node_row][this.state.finish_node_col],
      isFinish: false,
    }
    const newNode = {
      ...node,
      isFinish: true,
    }
    newGrid[this.state.finish_node_row][this.state.finish_node_col] = previousFinish;
    this.setState({finish_node_col: col});
    this.setState({finish_node_row: row});
    newGrid[row][col] = newNode;
    
    return newGrid;
  };

  getNewGridWithStartMoved = (grid, row, col) => {
    if (row === this.state.start_node_row && col === this.state.start_node_col) return;
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const preiousNode = grid[this.state.start_node_row][this.state.start_node_col];
    const previousStart = {
      ...preiousNode,
      isStart: false,
    }
    const newNode = {
      ...node,
      isStart: true,
    }
    newGrid[this.state.start_node_row][this.state.start_node_col] = previousStart;
    this.setState({start_node_col: col});
    this.setState({start_node_row: row});
    newGrid[row][col] = newNode;
    
    return newGrid;
  };

   getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall,
     };
    document.getElementById(`node-${node.row}-${node.col}`).className =
            'node node-wall';
    newGrid[row][col] = newNode;
    return newGrid;
  };

    visualizeAlgoritm() {
        const {grid} = this.state;
        const startNode = grid[this.state.start_node_row][this.state.start_node_col];
        const finishNode = grid[this.state.finish_node_row][this.state.finish_node_col];
        var visitedNodesInOrder = null;
        var nodesInShortestPathOrder;
        switch(this.state.chosen_algorithm){
          case 'dijkstra':
            visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
            nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
            this.animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder);
            break;
          case 'astar':
            visitedNodesInOrder = astar(grid, startNode, finishNode);
            nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
            this.animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder);
            break;
          case 'breadthfirst': 
            visitedNodesInOrder = breadthFirst(grid, startNode, finishNode);
            nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
            this.animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder);
            break;
          case 'depthfirst': 
            visitedNodesInOrder = depthFirstSearch(grid, startNode, finishNode);
            nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
            this.animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder);  
            break;
          case 'greedy': 
            visitedNodesInOrder = greedy(grid, startNode, finishNode);
            nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
            this.animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder);  
            break;  
        }
    }

    clearBoard() {
       {Object.keys(this.state.grid).map(keyOuter => {
         Object.keys(this.state.grid[keyOuter]).map(keyInner => {
          if ((keyOuter != this.state.start_node_row || keyInner != this.state.start_node_col) && (keyOuter != this.state.finish_node_row || keyInner != this.state.finish_node_col) && keyOuter != 0 && keyOuter != 24 &&  keyInner != 0 && keyInner != 59)
              document.getElementById(`node-${this.state.grid[keyOuter][keyInner].row}-${this.state.grid[keyOuter][keyInner].col}`).className =
              'node';           
         })
        })
       }

       const grid = this.getInitialGrid();
    }

    handleChange(event) {
      this.setState({chosen_algorithm: event.target.value});
  }
  
    render() {
        const {grid, mouseIsPressed} = this.state;

        return (
          <div className="visualizer-scene">
            <select class="sub-menu" onChange={(event) => this.handleChange(event)}>
              <option value="" selected disabled hidden>Choose algorithm...</option>
              <option value="dijkstra" className="menu-item">Dijkstra</option>
              <option value="astar" className="menu-item">A star</option>
              <option value="greedy" className="menu-item">Greedy Best-First</option>
              <option value="breadthfirst" className="menu-item">Breadth-First Search</option>
              <option value="depthfirst" className="menu-item">Depth-First Search</option>
            </select>
            <button className="vis-btn-start" onClick ={() => this.visualizeAlgoritm()}>
                Visualize
            </button>
            <button className="vis-btn-stop" onClick ={() => this.clearBoard()}>
              Clear Board
            </button>
            <button className="vis-btn-maze" onClick = {() => this.createMaze()}>
              Create Maze
            </button>
            <div>
              <p>Move the start or finish. Create mazes. Enjoy!</p>
            </div>
            <div className="grid">
               {grid.map((row, rowIdx) => {
                   return (
                    <div className="grid-row" key={rowIdx}>
                       {row.map((node, nodeIdx) => {
                       const {row, col, isFinish, isStart, isWall} = node;
                       return (
                        <Node  key={nodeIdx}
                        col={col}
                        row={row}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={isWall}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                        onMouseEnter={(row, col) =>this.handleMouseEnter(row, col)}
                        onMouseLeave={(row, col) => this.handleMouseLeave(row, col)}
                        onMouseUp={() => this.handleMouseUp()}
                      ></Node>
                       );
                    })}
                    </div>
                   );
               })}
            </div>
            </div>
        )
    }
}


  
  
  
  