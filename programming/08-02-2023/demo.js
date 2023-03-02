/*   
const person={
    name:"sudhanshu",
    age:24,
    height: "5ft 8 inch"
}
for (var key in person){
   // console.log(key);
   // console.log("");
    //console.log(person[key]);
  //  console.log("");
    //console.log(key,person[key]);
}
var arr=[2,3,4,5,6,4,5,9,5,6,];
for(var key in arr){
   // console.log(key);
    console.log(key,arr[key]);
}*/


/*const X={a:20,b:30,c:40}
const Y={a1:3,b1:6,c1:9}
var s1=(X["a"]+Y["a1"])-(X["b"]+Y["b1"])+(X["c"]+Y["c1"])
    console.log(s1);*/



    // print sum of the elements of array
/*var arr=[3,8,-1,8,9],sum=0
for (var key in arr){
	sum=sum+arr[key];

}
	console.log(sum);
*/


//cncatenate the string in array
/*
var arr=['s','u','d','h','a'],str="";
for(var key in arr){
	str+=arr[key];
}
console.log(str);*/

var date1=new Date("2023-02-08");
date1 = String(date1);
console.log(date1.slice(0,15))