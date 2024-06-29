function anagram(str1,str2){
    let obj={}
    
    for(let char of str1){
        obj[char]=(obj[char]||0)+1
    }
    
    for(let char of str2){
        if(!obj[char]){
            return false
        }
        obj[char]--
    }
    return true
  }
  
  console.log(anagram("silent","listen"))