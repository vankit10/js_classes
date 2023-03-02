var x= new Map()
x.set("name","sudhanshu")
x.set("age","24")
x.set("a","24")
x.set("b","25")
x.set("c","28")
console.log(x);
x.delete('c')
a=x.size
console.log(a)
console.log(x)
//x.clear();
d=x.has('a')
console.log(d)
console.log(x.get('b'));