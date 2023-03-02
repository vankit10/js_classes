
var arr= [5,6,5,8,6,4]
arr.forEach(myFunction);       //myFunctionwill be 7 times,since it has 7 elements
                                //function run for each element 
function myFunction(value,index,arr){
    console.log(index,arr,value);

}