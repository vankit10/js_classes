function reverse(num){
  let rev=""
  
  while(num!=0){
   var i=num%10
    rev+=i
    num=parseInt(num/10)
    
  } 
  console.log(rev)
}
reverse(654754)