import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Canvas from './components/Canvas/Canvas';
import Grid, { pathFinder } from './classes/Grid/Grid';

const canvasWidth = document.body.clientWidth;
const canvasHeight = document.body.clientHeight;

const board = new Grid(10, 10, 100);

console.log(board);
board.setVal(0,0,1);
board.setVal(0,1,1);
board.printGrid();

const draw = (context, fc) => {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    board.render(context);
};


console.log(document.body.canvasWidth);
ReactDOM.render(<Canvas draw={draw} width={canvasWidth} height={canvasHeight} />, document.getElementById('root'));
