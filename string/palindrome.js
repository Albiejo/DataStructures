function check(s){
    let left=0
    let right=s.length-1
    while(left<right){ 
        if(s[left]!==s[right]){
            return false
        }
        left++
        right--
    }
    return true
    
    
}

console.log(check("racecar"))


//with recurssion 
function palindrome(s , left=0 , right=s.length-1){
    
    
    if(s[left] !== s[right]){
        return false
    }
    if(left>right){
        return true
    }
    
    return palindrome(s , left+1, right-1)
}


console.log(palindrome("racecar"))
