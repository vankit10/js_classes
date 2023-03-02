var stack=[]

function push(val){
    stack.push(val)
}

function print(){
    for(var i=0;i<stack.length;i++){
        process.stdout.write(" "+stack[i])
    }
}
function size(){
    console.log(" "+stack.length)
}
function peek(){
    if(stack.length==0){
        console.log("stakck empty")
    }
    else{
        console.log(stack[stack.length-1])
    }
}
push(20);
push(40);
push(60);
push(80);
push(45);
print();
size();
console.log(" "+stack.pop());
peek();