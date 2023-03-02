var x = new Map();
x.set("a",8);
x.set("b",10);
x.set("c",67);
x.set("d",113);
console.log(x);
var isAnsFound =false;
function check(value,key,map){
   
    if(value>=60){
        console.log(key,value)
        isAnsFound = true
            
        }
        if(isAnsFound===true){
            return;
        }
       
    }

x.forEach(check);
if(isAnsFound===false){
    console.log("no value is greater than 60")
}

