class Node{
    constructor(value,next){
        this.value=value
        this.next=null
    }
}
var start = new Node(1);
for(var i=2;i<=5;i++){
    var temp_node=new Node(i);
    var temp=start
    while(temp.next != null){
        temp = temp.next
    }
    temp.next = temp_node
}
var temp=start;
while(temp != null){
    console.log(temp.value)
    temp=temp.next
}