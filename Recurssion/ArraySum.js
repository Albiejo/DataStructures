function ArraySum(array){
    
    if(array.length<1){
        return 0
    }
    
    return ArraySum(array.slice(1))+array[0]
    
}

console.log(ArraySum([1,2,3,4]))