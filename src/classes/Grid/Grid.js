import findPath from './findPath';

class Grid {
    constructor(rows, cols, width, colours = ["#FFFFFF", "#000000"]) {
        this.rows = rows; this.cols = cols; this.width = width; this.colours = colours;
        this.grid = (new Array(this.rows)).fill(0).map(() => (new Array(this.cols)).fill(0));
    }
    
    getGrid() { return this.grid; }
    setVal(row, col, val) { this.grid[row][col] = val; }
    getVal(row, col) { return this.grid[row][col]; }

    getCol(row, col) {
        return this.colours[Math.min(this.grid[row][col], this.colours.length-1)];
    }

    getPos(row, col) {
        return [this.width * col, this.width * row];
    }

    render(context, fc=null) {
        const n = this.rows, m = this.cols;
        for(let i=0; i<n; ++i) for(let j=0; j<m; ++j) {
            context.fillStyle = this.getCol(i, j);
            context.fillRect(...this.getPos(i, j), this.width, this.width);
        }
    }

    printGrid() {
        const n = this.rows, m = this.cols;
        let output = '';
        for(let i=0; i<n; ++i) {
            for(let j=0; j<m; ++j) output += this.grid[i][j] + ' ';
            output += '\n';
        }
        console.log(output);
    }
}

export default Grid;
export { findPath };
