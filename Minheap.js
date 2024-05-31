 
class maxheap {

    constructor() {
        this.heap = []
    }
  
  
    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
  
    leftchildIndex(index) {
  
        return index * 2 + 1
    }
  
    rightchildIndex(index) {
        return index * 2 + 2
    }
  
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
  
  
    build(array) {
        this.heap = [...array]
        for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--) {
            this.bubbledown(i)
  
        }
  
    }
  
    insert(value) {
        this.heap.push(value)
        this.bubbleup(this.heap.length - 1)
    }
  
    delete() {
        if (this.heap.length < 1) {
            return null
        }
  
        let removeitem = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbledown(0)
        console.log("item removed: " + removeitem);
    }
  
    bubbledown(index) {
        let leftc = this.leftchildIndex(index)
        let rightc = this.rightchildIndex(index)
        let maxindex = index
  
        if (leftc < this.heap.length && this.heap[leftc] > this.heap[maxindex]) {
            maxindex = leftc
        }
  
        if (rightc < this.heap.length && this.heap[rightc] > this.heap[maxindex]) {
            maxindex = rightc
        }
        if (maxindex !== index) {
            this.swap(index, maxindex)
            this.bubbledown(maxindex)
        }
  
    }
  
    bubbleup(index) {
  
        while (index > 0) {
            let parent = this.parentIndex(index)
            if (this.heap[parent] < this.heap[index]) {
                this.swap(parent, index)
                index = parent
            }
            else {
                break
            }
        }
  
    }
  }

let q = new maxheap()
q.insert(9)
q.insert(5)
q.insert(1)
q.insert(70)
q.insert(45)
q.insert(13)
console.log(q.heap);
q.delete()
console.log(q.heap);