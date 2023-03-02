class node{
    constructor(value,next){
        this.value=value
        this.next=next
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
    while(temp !=null){
        process.stdout.write(" "+temp.value)
        temp=temp.next
    }
    console.log(" ")
}
create_list([1,5,2,1,5,8])
print();

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
addtostart(50)
print()
function addtoend(value){
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
    }
}
addtoend(60)
print();
function deletefromstart(){
    if(start===null){
        console.log("list is empty")
    }
    else{
        start=start.next
    }
}
deletefromstart();
print()
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
deletefromend()
print()



function count()
{
    var cnt=1
    if(start===null)
    {
        console.log("count =0 " )
    }
    else{
        var temp=start
        while(temp.next!=null){
            cnt +=1
            temp=temp.next
        }

    }
    console.log(cnt)
}

count();

function insertatNth(value,pos){
    var new_node= new node(value)
    var temp=start
    while(pos-2>0){
        temp=temp.next;
        pos--
    }
    new_node.next=temp.next
    temp.next=new_node
}

insertatNth(15,5)
print()