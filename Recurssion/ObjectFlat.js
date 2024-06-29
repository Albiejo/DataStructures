
function flattenObject(obj , key=""){
  
    let out ={}
    for(let item in obj){
        let newkey = key ? key+"."+item : item
        if(typeof obj[item] === "object"){
            Object.assign(out , flattenObject(obj[item] , newkey))
        }else{
            out[newkey] = obj[item]
        }
    }
    
    return out
  }
  
  
  
  
  let obj = { a: { b: { c: 1 } }, d: 2, e: { f: { g: 3 } } };
  console.log(flattenObject(obj))