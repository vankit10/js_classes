
var arr=[['a','b','c'],[2,3,4],[5,6,7]];

var mymap=new Map();

for (var i=0;i<3;i++){
    var key=' ';
    var value=0;

    for(var j=0;j<3;j++)
    {
        if(j==0)
        {
            key = arr[j][i]
        }
        else
        {
            value += arr[j][i]
        }
    }
    mymap.set(key,value)
}
console.log(mymap)