
class MaxHeap {
    constructor() {
        this.heap = [];
    }
  
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
  
    leftChildIndex(index) {
        return index * 2 + 1;
    }
  
    rightChildIndex(index) {
        return index * 2 + 2;
    }
  
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    build(array) {
        this.heap = [...array];
        for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--) {
            this.bubbleDown(i);
        }
    }
  
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }
  
    delete() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let removedItem = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        console.log("item removed: " + removedItem);
        return removedItem;
    }
  
    bubbleDown(index) {
        let left = this.leftChildIndex(index);
        let right = this.rightChildIndex(index);
        let maxIndex = index;

        if (left < this.heap.length && this.heap[left] > this.heap[maxIndex]) {
            maxIndex = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[maxIndex]) {
            maxIndex = right;
        }

        if (maxIndex !== index) {
            this.swap(index, maxIndex);
            this.bubbleDown(maxIndex);
        }
    }
  
    bubbleUp(index) {
        while (index > 0) {
            let parent = this.parentIndex(index);
            if (this.heap[parent] < this.heap[index]) {
                this.swap(parent, index);
                index = parent;
            } else {
                break;
            }
        }
    }
}

// Example Usage
let q = new MaxHeap();
q.insert(9);
q.insert(5);
q.insert(1);
q.insert(70);
q.insert(45);
q.insert(13);
console.log(q.heap); // Should print the heap array in max heap order
q.delete(); // Should remove the max element (70)
console.log(q.heap); // Should print the heap array after deletion
