quantity=[2,8,6,9,3]
price=[5,7,9,8,7]
/*let k=new Array();
for(var i=0;i<quantity.length;i++){
    k.push((quantity[i]*price[i]))
}
let amt=0
for(var i=0;i<k.length;i++){
    amt +=k[i]
}
process.stdout.write(""+amt)*/


quantity=[2,8,6,9,3]
price=[5,7,9,8,7]
let k=0,sum=0
for(var i=0;i<quantity.length;i++)
{
    k=quantity[i]*price[i]
    sum+=k
}
process.stdout.write(""+sum)