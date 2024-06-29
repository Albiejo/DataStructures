function capitalizeFirstChar(str) {
    let s=[]
    let ch=""
    
    for(let i=0; i<str.length; i++){
       if(str[i]!==" "){
           ch=ch+str[i]
       } else if(str[i]===" "){
           s.push(ch)
           ch=""
       }
    }
    
    if(ch.length>0){
        s.push(ch)
    }
    console.log( s.reverse().join(" "))
    
    }
    
    capitalizeFirstChar("hello world")
    