class Node{
    constructor(val,next){
        this.val = val
        this.next = null
    }
}
var arr = ['a','b','c','d']
var start = null
function generateLinkedList(arr){
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

function printList(){
    var temp = start
    while(temp != null){
        console.log(temp.val)
        temp = temp.next
    }
}

generateLinkedList(arr)
printList()