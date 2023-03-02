arr=[2,8,9,8,-1,3,5]
size=3
var i=0,j=size-1
var sum=0
while(j<arr.length){
    var tsum=0
    for(k=i;k<=j;k++){
        if(arr[k]%2==0)
            tsum +=arr[k]
        
    }
    if(tsum>sum){
        sum=tsum
    }
    i +=1
    j +=1
}
console.log(sum)