function isvalid(value){
    var staacck=[]
    for(var i=0;i<value.length;i++){
        if(value[i]==='('){
            staacck.push(value[i])
        }
        else{
            if(staacck.length==0){
              return false
              }
             else{
                staacck.pop()
                }
            }
        }
    if(staacck.length===0){
        return true
    }
}

console.log(isvalid("())"))