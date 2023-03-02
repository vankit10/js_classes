class node{
    constructor(value,next){
        this.value=value;
        this.next=next;
    }
}
var arr=['v','e','r','m','a']
var start=null
function generate(arr){
    for(var value of arr){
        if(start===null){
            var temp=new node(value)
            start=temp;
        }
        else{
            var temp_node=start;
            while(temp_node.next != null){
                temp_node=temp_node.next
            }
            temp=new node(value)
            temp_node.next=temp
        }
    }
}
function print(){
    var temp = start;
    while(temp !=null){
        process.stdout.write(""+temp.value)
        temp=temp.next
    }
}

generate(arr)
print()