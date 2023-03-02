function pattern1(num){
    var arr;
    for(var i=0;i<=num;i++){
        for (var j=num;j>i;j--){
                process.stdout.write(" * ");   
                
       }
       console.log("");
    }
    var arr2;
    for(var i=1;i<=num;i++){
        for (var j=1;j<=i;j++){
                process.stdout.write(" * ");    
       }
       console.log(" ");
    }
}
pattern1(6);

/*let arr_3=[4,6,7]
let arr_4=[8,1,9]
let sum=[];
for(var i=0;i<arr_3.length;i++)
{
    sum[i]=arr_3[i]+arr_4[i];
    //console.log(sum[i]);
}
console.log(sum);

*/

/*
function power(a,b){
    let current=a;
    let voltage=b;
    power=current*voltage;
    console.log(power);
}
power(110,3);*/

/*
var arr=[1,2,4,6,3,7,8]  
var n=8; 
var isum=0;
var nsum=0              //n=8
arr.sort();
//console.log(arr);
for(var n=1;n<=8;n++){
    nsum+=n;
    }
   // console.log(nsum);
for(var i=0;i<arr.length;i++){
    isum+=arr[i];
    
}
//console.log(isum);

console.log(nsum-isum);*/
 
    
