
function reverse(arr , k){
    
    if(k > arr.length){
        return "not possible"
    }
    
   let left=0;
   let right=k-1
   
   while(left<right){
       let temp=arr[left]
       arr[left]=arr[right]
       arr[right]=temp
       left++
       right--
   }
   return arr
}


const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(reverse(arr , 5))
// Expected output: [3,2,1,4,5,6,7]