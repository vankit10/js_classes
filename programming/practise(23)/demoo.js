var myMap = new Map();
myMap.set("a",8);
myMap.set("b",9);
myMap.set("c",-1);
myMap.set("d",13);
myMap.set("e",18);
for (var [key] of myMap){
    if(myMap.get(key)%2==0)
   {
    myMap.delete(key)
   }

}

console.log(myMap)

