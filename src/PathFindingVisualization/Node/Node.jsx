import React, {Component} from 'react';
import './Node.css';

export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {col,
            isFinish,
            isStart,
            isWall,
            onMouseDown,
            onMouseEnter,
            onMouseUp,
            row,
            } = this.props;
        const extractClassName = isFinish ?'node-finish' : isStart ? 'node-start' : '';
        return (
            <div
              id={`node-${row}-${col}`}
              className={`node ${extractClassName}`}
              onMouseDown ={() => onMouseDown(row, col)}
              onMouseEnter = {() => onMouseEnter(row,col)}
              onMouseUp = {()=>onMouseUp()}
              ></div>
          );
    }
}