class node{
    constructor(value,next){
        this.value=value
        this.next=null
    }
}
var start=null
function create_list(arr){
     for(var value of arr){
        if(start===null){
            var temp = new node(value)
            start=temp
        }
        else{
            var temp_node=start
            while(temp_node.next !=null){
                temp_node=temp_node.next
            }
            temp=new node(value)
            temp_node.next=temp

        }
    }

}

function print(){
    var temp=start
    while(temp!=null){
        console.log(temp.value)
        temp=temp.next
    }
}


function reverse(){
    var stack=[]
    var temp=start
    while(temp != null){
            stack.push(temp.value)
            temp=temp.next
        }
        temp =start
        while(temp != null){
            temp.value=stack.pop()
            temp=temp.next
        }
        
    }




create_list([1,6,8,9,11,12,13])


console.log("")
reverse()
print()