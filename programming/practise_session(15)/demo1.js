var x = new Map();
x.set("a",8);
x.set("b",10);
x.set("c",17);
x.set("d",13);
console.log(x);
let esum=0,osum=0;
function dojob(value,key){
   
    if(value%2==0){
       esum=esum+value;
       
    }
    
    else{
       if(value%2==1)
       osum=osum+value
    
    
    }
}
x.forEach(dojob);
console.log("sum of evem are" +esum);
console.log("sum of odd are " +osum)