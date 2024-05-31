class MaxHeap{
    constructor(){
        this.heap=[];
    }
    parentIndex(index){
        return Math.floor(index-1)/2;
    }
    leftChild(index){
        return index*2+1;
    }
    rightChild(index){
        return index*2+2;
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]];
    }
    build(array){
        this.heap=array;
        for(let i=Math.floor((this.heap.length-1)/2);i>=0;i--){
            this.bubbledown(i);
        }
    }
    insert(value){
        this.heap.push(value);
        this.bubbleup(this.heap.length-1)
    }
    remove(){
        if(this.heap.length<1)
            return null;
        let removeItem=this.heap[0];
        this.heap[0]=this.heap.pop();
        console.log("Item removed:"+removeItem);
        this.bubbledown(0);
    }
     bubbleup(index){

        while(index>0){

            let parent=this.parentIndex(index)
            if(this.heap[parent] < this.heap[index]){
                this.swap(index , parent)
                index = parent
            }

            else{
                break;
            }
        }
    }

    bubbledown(index){

        while(true){
        let leftc=this.leftChild(index)
        let rightc=this.rightChild(index)
        let minimumindex=index

        if(leftc < this.heap.length && this.heap[leftc] < this.heap[minimumindex]){
            minimumindex=leftc
        }

        if(rightc < this.heap.length && this.heap[rightc] < this.heap[minimumindex]){
            minimumindex=rightc
        }

        if(minimumindex!==index){
            this.swap(minimumindex , index)
            index=minimumindex
        }
        else{
            break;
        }

    }
}
}

const heap=new MaxHeap();
heap.insert(50);
heap.insert(20);
heap.insert(30);
heap.insert(90);
heap.insert(25);
console.log(heap.heap);
heap.remove();
console.log(heap.heap);