function checkpowerofTWO(num){
     
    if(num<1){
        return false
    }
    
    if(num===1){
        return true
    }
    
    
    return checkpowerofTWO(num/2)
    
}

console.log(checkpowerofTWO(8))