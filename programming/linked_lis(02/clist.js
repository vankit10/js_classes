class Node{
    constructor(value,next){
        this.value=value
        this.next=null
    }
}
var start=null
function generatelist(arr){
    for(var i=0;i<=arr.length;i++){
        var new_node=new Node(arr[i])
        if(start===null){
            start=new_node
        }
        else{
            var temp=start
            while(temp.next!=null){
                temp=temp.next
            }
            temp.next=new_node
            if(i===arr.length-1){
                temp.next=start
            }
            
        }
    }
}
function print(start){
    var temp=start
    while(temp!=null){
        process.stdout.write(" "+temp.value)
        temp=temp.next
       
    }

}
generatelist([2,5,4,8,7,96,6])
print(start)