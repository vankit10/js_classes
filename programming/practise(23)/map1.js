var myMap = new Map();
myMap.set("a",8);
myMap.set("b",9);
myMap.set("c",-1);
myMap.set("d",13);
myMap.set("e",18);
var flkey='';
var slkey='';
var flowest,slowest
for (var [key] of myMap){
    if(myMap.get(key)<flkey)
    {
        flowest=myMap.get(key)
        flkey=key
    }
    else if(myMap.get(key)<slkey){
        slowest=myMap.get(key)
        slkey=key

    }
   
  // console.log(myMap.get(key))
   

}
myMap.delete(flkey)
myMap.delete(slkey)
console.log(myMap)

