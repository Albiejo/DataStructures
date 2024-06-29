function capitalizeFirstChar(str) {
    let s=""
    let cap=true
    
    for(let i=0; i<str.length; i++){
        if(cap && str[i] !==" "){
            s=s+str[i].toUpperCase()
            cap=false
        }else{
            s=s+str[i]
        }
        
        
        if(str[i]===" "){
            cap=true
        }
    }
    return s
    }
    
    console.log(capitalizeFirstChar("hello world")); // Outputs: "Hello World"
    console.log(capitalizeFirstChar("this is a test")); // Outputs: "This Is A Test"
    console.log(capitalizeFirstChar("capitalize every word")); // Outputs: "Capitalize Every Word"
    