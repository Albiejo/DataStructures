function StringReverse(str){
    
    if(str.length<1){
        return ""
    }
    
    return StringReverse(str.slice(1))+str[0]
    
}

console.log(StringReverse("albi"))