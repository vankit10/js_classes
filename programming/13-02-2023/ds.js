const X = new Set()
    X.add(2);  
    X.add(3);

    var arr=[2,3,5,4,5,6,1,5,4,3]
    var y=new Set(arr)
   // x=[2,3,5,4,6,1]
  
   console.log(X);
   console.log(y);
   y.delete(2);
   console.log(y);
   y.has(5);
   console.log(y);
   y.clear();
   console.log(y);

  