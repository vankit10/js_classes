var arr=[2,3,5,4,5,6,1,5,4,3]
y= new Set(arr);

console.log(y);
y.delete(2);
console.log(y);
y.has(5);
console.log(y);
y.clear();
console.log(y);