arr=[2,3]
for(var x in arr){
    console.log("for in loop on arr "+x)
}

for(var x of arr){
    console.log("for of loop on arr "+x)
}


var amap=new Map()
amap.set("a",15)
amap.set("b",25)
for(var x in amap){
    console.log("for-in loo : "+x)
}
for(var x of amap){
    console.log("for of loop on map : x[0] is showing key "+x[0]+","+ " x[1] is showing value "+x[1])
}

var nset=new Set()
nset.add(10)
nset.add(20)
for(var x in nset){
    console.log(x)    // not working in set
}
function dojob(arg1,arg2){
    console.log(arg1,arg2)
}
nset.forEach(dojob);