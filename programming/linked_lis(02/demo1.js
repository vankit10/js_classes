class Node{
    constructor(value,next){
        this.value=value
        this.next
    }
}
var start=null
function generatelist(arr){
   {
        for(var val of arr){
            if(start === null){
                var temp_node = new Node(val)
                start = temp_node
            }else{
                var temp = start;
                while(temp.next != null){
                    temp = temp.next
                }
                var temp_node = new Node(val)
                temp.next = temp_node
            }
        }
    
    }
}
function print(start){
    var temp=start
    while(temp!=null){
    console.log(temp.value)
    temp=temp.next
}
}
generatelist([3,8,11,-3,9,18,16,17])
print(start)

function reverse(){
    //var n=8
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
 
    console.log("")
    reverse()
    print(start)

    function deletehalf(){
        
        if(start===null){
            console.log("list is empty")
        }
        else{
            
            start=start.next.next.next.next
            
        }
    }
    console.log("")
    deletehalf()
    print(start)