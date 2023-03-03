class node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
var start=null
function createlist(arr){
    for(var value of arr){
        var new_node=new node(value)
        if(start===null){
            start=new_node
        }
        else{
            var temp=start
            while(temp.next!=null){
                temp=temp.next
            }
            temp.next=new_node
            new_node.prev=temp
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
createlist([1,3,6,5,4,8,9,7])
print(start)

function addtostart(value){
    var temp=new node(value)
    if(start===null){
        start=temp
    }
    else{
        temp.next=start
        start=temp
    }
}
function deletefromend(){
    if(start===null){
        console.log("list is empty")
    }
    else{
        var temp=start;
        while(temp.next.next !=null)
        {
            temp=temp.next
        }
        temp.next=null
    }
}
function deleteatstart(){
    if(start===null){
        console.log("list is empty")
    }
    else{
        start=start.next
    }
}
function addatend(value){
    var temp=new node(value)
    if(start===null){
        start=temp
    }
    else{
        var temp_node=start
        while(temp_node.next != null){
            temp_node=temp_node.next
        }
        temp_node.next=temp
        temp.prev=temp_node
    }
}

addtostart(16)
console.log("")
print(start)
console.log("")
deletefromend()
print(start)
console.log("")
deleteatstart()
print(start)
console.log("")
addatend(65)
print(start)
