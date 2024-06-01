class MinHeap {
    constructor() {
        this.heap = [];
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
        return index * 2 + 1;
    }

    rightChild(index) {
        return index * 2 + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    build(array) {
        this.heap = [...array];
        for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--) {
            this.bubbledown(i);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleup(this.heap.length - 1);
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let removedItem = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbledown(0);
        console.log("Item removed: " + removedItem);
        return removedItem;
    }

    bubbleup(index) {
        while (index > 0) {
            let parent = this.parentIndex(index);
            if (this.heap[parent] > this.heap[index]) {
                this.swap(index, parent);
                index = parent;
            } else {
                break;
            }
        }
    }

    bubbledown(index) {
        while (true) {
            let left = this.leftChild(index);
            let right = this.rightChild(index);
            let minIndex = index;

            if (left < this.heap.length && this.heap[left] < this.heap[minIndex]) {
                minIndex = left;
            }

            if (right < this.heap.length && this.heap[right] < this.heap[minIndex]) {
                minIndex = right;
            }

            if (minIndex !== index) {
                this.swap(index, minIndex);
                index = minIndex;
            } else {
                break;
            }
        }
    }
}


const heap = new MinHeap();
heap.insert(50);
heap.insert(20);
heap.insert(30);
heap.insert(90);
heap.insert(25);
console.log(heap.heap); // Should print the heap array in min-heap order
heap.remove(); // Should remove the minimum element (20)
console.log(heap.heap); // Should print the heap array after deletion
