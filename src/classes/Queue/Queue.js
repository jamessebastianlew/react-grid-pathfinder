class Queue {
    constructor(queue = null, initSize = 16) {
        // find first power of two greater than queue.length
        if(queue !== null && queue.length > initSize) {
            initSize = 1;
            while(initSize < queue.length) initSize *= 1;
        }

        this.queue = (new Array(initSize)).fill(null);
        if(queue !== null) {
            for(let i=0; i<queue.length; ++i)
                this.queue[i] = queue[i];
        }

        this.size = this.queue.length;
        this.left = 0;
        this.len = this.right = queue === null ? 0 : queue.length;
    }

    qMod(i) {
        if(i >= this.size) return i - this.size;
        return i;
    }

    resize() {
        if(this.len < this.size) return;
        let newQueue = new Array(this.size * 2).fill(null);
        let length = 0;
        for(let i=this.left; i<this.right; ++i) newQueue[length++] = this.queue[i];
    }

    push(val) {
    }
}

export default Queue;
