class Node {
    constructor() {
        this.distance = null;
        this.successor = null;
        this.visited = false;
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