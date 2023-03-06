function printvalue(n){
    if(n<=0)
    return;
    console.log(n)
    printvalue(n-1)
}
printvalue(5)