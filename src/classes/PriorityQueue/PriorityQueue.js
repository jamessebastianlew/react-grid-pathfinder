class PriorityQueue {
    constructor(comp) {
        this.pq = [null];
        this.comp = comp;
        this.len = 1;
    }

    shiftUp(i) {
        const {pq, comp} = this;
        for(;(i>>1) > 0 && comp(pq[i], pq[i >> 1]); i = i>>1)
            [pq[i], pq[i >> 1]] = [pq[i >> 1], pq[i]];
    }

    shiftDown(i) {
        const {pq, comp} = this;
        while((i<<1) <= this.len) {
            let rc = (i << 1) | 1, lc = i << 1;
            let mxInd = lc;
            if(rc <= this.len && comp(pq[rc], pq[lc])) mxInd = rc;
            if(comp(pq[mxInd], pq[i])) {
                [pq[i], pq[mxInd]] = [pq[mxInd], pq[i]];
                i = mxInd;
            } else break;
        }
    }
    
    push(val) {
        const {pq} = this;
        pq.push(val);
        shiftUp(++this.len);
    }

    pop(val) {
        const {pq} = this;
        [pq[1], pq[this.len]] = [pq[this.len], pq[1]];
        --this.len;
        if(this.len > 0) shiftDown(1);
    }
}

export default PriorityQueue;
