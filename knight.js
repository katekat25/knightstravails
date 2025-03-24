class Node {
    constructor() {
        this.distance = null;
        this.successor = null;
        this.visited = false;
    }
}

function getPossibleMoves(x, y) {
    function pushValidMove(x, y, xShift, yShift, operation, array) {
        let boardWidth = 8;
        let boardHeight = 8;
        if (x >= boardHeight || y >= boardHeight) {
            throw new Error("Coordinates must not exceed board height or width.");
        }
        let newX = operation(x, xShift);
        let newY = operation(y, yShift);
        if (newX >= 0 && newY >= 0 && newX < boardWidth && newY < boardHeight) {
            if (!array.some(([existingX, existingY]) => existingX === newX && existingY === newY)) {
                array.push([newX, newY]);
            }
        }
    }
    let moves = [];

    const operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    }

    const shifts = [
        [1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]
    ]

    for (let [xShift, yShift] of shifts) {
        pushValidMove(x, y, xShift, yShift, operations.add, moves);
        pushValidMove(x, y, xShift, yShift, operations.subtract, moves);
    }

    return moves;
}

//ex coord: [4,4]
[x+1,y+2]
[x+2,y+1]
[x+2,y-1]
[x+1,y-2]
[x-1,y-2]
[x-2,y-1]
[x-2,y+1]
[x-1,y+2]

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