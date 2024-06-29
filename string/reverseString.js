function reverseString(s){
    let stack=[]
    let str=""
    for(let char of s){
        stack.push(char)
    }
    
    while(stack.length){
        str+=stack.pop()
    }
    return str
}


console.log(reverseString("Naseela"))