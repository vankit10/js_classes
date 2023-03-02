function pat(n){
   let c="A"
   var count=0;
   
    for(var i=0;i<n;i++){
        for(j=0;j<=i;j++){
           process.stdout.write(String.fromCharCode(65+count))
          process.stdout.write(" ");  // for giving spaces b/w alphabet
           count +=1
          
           
          
        }
        console.log(" ")
        
    }
    
}
pat(5)