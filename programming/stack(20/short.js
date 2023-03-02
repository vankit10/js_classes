function short(value){
    var stack=[]
    for(var i=0;i<value.length;i++)
    if(value[i] != '#'){
    stack.push(value[i])
    }
    else{
        stack.pop();
    }
process.stdout.write(""+stack)
}
short("Anlkt#dsdb#")