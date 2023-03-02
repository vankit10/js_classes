
class Node{
    constructor(val,next){
        this.val=val
        this.next=null;

    }
}
var arr=[2,4,5,6,8,7];
var start=null;
function generate(arr){
    for(var val of arr){
        if(start===null){
            var temp_node=new Node(val)
            start=temp_node
        }
        else{
            var temp=start;
            while(temp.next != null){
                temp=temp.next;

            }
            var temp_node=new Node(val)
            temp.next=temp_node
        }
    }
}
function print(){
    var temp=start
    while(temp!=null){
        console.log(temp.val)
        temp=temp.next
    }
}
generate(arr);
print();