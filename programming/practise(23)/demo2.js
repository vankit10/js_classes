var arr1=[3,8,9,15]
var arr2=[6,-1,3,2]
let sum=0;
var arr3=new Array();
var index=arr2.length-1;
/*for(var i=arr2.length-1;i>=0;i--){
    arr3.push(arr2[i]);
    
}

for(var i=0;i<arr3.length;i++){
    m=arr3[i]*arr1[i];
    sum=sum+m
}    below 2nd method 
*/
for(var i=0;i<arr1.length;i++){
    sum +=(arr1[i]*arr2[index])
        index--;
}
console.log(sum)