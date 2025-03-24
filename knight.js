class Node {
    constructor() {
        this.distance = null;
        this.successor = null;
        this.visited = false;
    }
}

class Chessboard {
    constructor(width = 8, height = 8){
        this.width = width;
        this.height = height;
    }

    isValidMove(x, y) {
        return x >= 0 && y >= 0 && x < this.width && y < this.height;
    }
}

class Knight {
    constructor(board) {
        this.board = board;
        this.moveset = [ 
            [1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]
        ];
    }

    getPossibleMoves(x, y) {
        if (!this.board.isValidMove(x, y)) {
            throw new Error ("Invalid starting position.");
        }

        return this.moveset
            .map(([dx, dy]) => [x + dx, y + dy])
            .filter(([newX, newY]) => this.board.isValidMove(newX, newY));
    }
}

function knightMoves(startPoint, endPoint) {
    let queue = [startPoint];
    startPoint.visited = true;
    startPoint.distance = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        if (node === endPoint) {
            return node;
        }

    }
    //while the queue is not empty
        //pop off the head of the queue
        //if it's endPoint
            //exit and return the point
        //for each next possible move:
            //mark the item as visited
            //increase its distance by one (implement a predecessor to increment distance correctly?)
            //put it in the queue
    //if we make it here it's fucked
}