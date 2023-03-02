var map=new Map()
map.set("a",3)
map.set("b",4)
map.set("c",6)
map.set("d",8)

var arr=new Array();
function dojob(value,key){
    arr.push(key);
}
function dojob1(value,key){
    arr.push(value);
}

map.forEach(dojob);

map.forEach(dojob1);
console.log(arr)

/*
const dojob = (value,key)=>{
    keyarr.push(key)
    valueArr.push(value)
}
map.forEach(dojob)
var ans=[]
for(v in keyArr){
    ans.push(keyArr[v])
}
for(v in valueArr){
    ans.push(valueArr[v])
}
console.log(ans)
*/