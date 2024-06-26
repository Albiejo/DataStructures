function heapSort(arr){
    const n=arr.length;
    for(let i=Math.floor(n-1)/2;i>=0;i--){
        heapify(arr,n,i);
    }
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]];
        heapify(arr,i,0);
    }
    return arr;
}


function heapify(arr,n,i){

    let largest=i;
    let left=i*2+1;
    let right=i*2+2;

    if(left<n && arr[left]>arr[largest]){
        largest=left;
    }
    
    if(right<n && arr[right]>arr[largest]){
        largest=right;
    }

    if(largest!=i){
        [arr[largest],arr[i]]=[arr[i],arr[largest]];
        heapify(arr,n,largest);
    }
    
}
const arr=[30,7,20,9,15];
console.log(heapSort(arr))