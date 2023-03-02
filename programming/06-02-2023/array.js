var arr=[1,2,3];
arr[4]=5;
arr[3]=6
arr.push(15,25,14,12);
arr[10]=2;
console.log(arr);

const arr2=[5,6,7];
arr2[4]=5;
arr2[4]=6;
//arr2=[4,5];   this shows error bcz it change the element of array and in const u can not chnge the element 
            //  but u can insert or override the array element
console.log(arr2);
arr3=[[2,3,4],[7,8,9]]
console.log(arr3[0]);
console.log(arr3[0][2]);
console.log("");
console.log(arr3);
console.log("");
console.log(arr3.length);
console.log(arr2.length);
console.log(arr.length);
console.log(arr.sort());
console.log(arr);
/*var arr=[3,8,8,9,6,5];

for(var i=arr.length-1;i>=0;i--)
{
    console.log(arr[i]);
}*/
/*var sum=0;
for(var i=0;i<arr.length;i++)
{
    sum=sum+arr[i];
    
}
console.log(sum);*/
