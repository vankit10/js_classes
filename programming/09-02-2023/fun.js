function dojob(){
    console.log("alpha vernma")
}
dojob(); // calling function

function oddno(){
    var i;
    console.log("odd nos are")
    for(i=0;i<100;i++){
     if(i%2==1){
       console.log(i);
    }
}
}
oddno();

function fact(a){
    var f=1;
    var a;
    for(var i=1;i<=a;i++){
        f=f*i;
    }
    console.log(f);
}
fact(3)