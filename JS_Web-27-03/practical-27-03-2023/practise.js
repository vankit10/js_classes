var number=document.getElementsByClassName('number')[0]
var no=number.innerText
var increase=document.getElementsByClassName('increase')[0]
var decrease=document.getElementsByClassName('decrease')[0]

console.log(number);
console.log(no)
console.log(increase)


function increaseNumber(){
    if(no<10){
    no=Number(no)
    no=no+1;
    number.innerText=no
    }
    else{
        alert("limit exceed");
    }
}

function decreaseNumber(){
    if(no>-10){

    
    no=Number(no)
    no=no-1;
    number.innerText=no
    }
    else{
        alert("Limit Exceeded");
    }
}


increase.addEventListener('click',increaseNumber)
decrease.addEventListener('click',decreaseNumber)
