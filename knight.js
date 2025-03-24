class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.distance = null;
        this.predecessor = null;
        this.visited = false;
    }
}

class Chessboard {
    constructor(width = 8, height = 8) {
        this.width = width;
        this.height = height;
        this.grid = Array.from({ length: width }, (_, x) =>
            Array.from({ length: height }, (_, y) => new Node(x, y))
        );
    }

    isValidMove(x, y) {
        return x >= 0 && y >= 0 && x < this.width && y < this.height;
    }

    getNode(x, y) {
        return this.isValidMove(x, y) ? this.grid[x][y] : null;
    }
}

class Knight {
    constructor(board) {
        this.board = board;
        this.moveset = [
            [1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]
        ];
    }

    getPossibleMoves(node) {
        return this.moveset
            .map(([dx, dy]) => {
                let newX = node.x + dx;
                let newY = node.y + dy;
                return this.board.isValidMove(newX, newY) ? this.board.getNode(newX, newY) : null;
            })
            .filter(n => n && !n.visited);
    }
}

function knightMoves(board, knight, startCoords, endCoords) {
    let startNode = board.getNode(...startCoords);
    let endNode = board.getNode(...endCoords);

    if (!startNode || !endNode) throw new Error("Invalid starting position.");

    let queue = [startNode];
    startNode.visited = true;
    startNode.distance = 0;

    while (queue.length > 0) {
        let node = queue.shift();

        if (node === endNode) {
            return node;
        }

        for (let move of knight.getPossibleMoves(node)) {
            move.visited = true;
            move.distance = node.distance + 1;
            move.predecessor = node;
            queue.push(move);
        }
    }

    return null;
}

function reconstructPath(endNode) {
    let path = [];
    let current = endNode;
    while (current) {
        path.push([current.x, current.y]);
        current = current.predecessor;
    }
    return path.reverse();
}

function printPath(endNode) {
    let path = reconstructPath(endNode);
    console.log(`The knight moves in ${path.length - 1} steps:`);
    path.forEach((pos, index) => {
        console.log(`${index}: (${pos[0]}, ${pos[1]})`);
    });
}

let board = new Chessboard();
let knight = new Knight(board);
let endNode = knightMoves(board, knight, [0,0], [7,7]);
printPath(endNode);