var number=document.getElementsByClassName('Number')[0]
var numberText=number.innerText
var increase=document.getElementsByClassName('increase')[0]
var decrease=document.getElementsByClassName('decrease')[0]
var warningBox = document.getElementsByClassName("warning_box")[0]
var closeBtn = document.getElementsByClassName("close_btn")[0]

console.log(number);
console.log(numberText)
console.log(increase)
console.log(warningBox)


function increaseNumber(){
    numberText = Number(numberText)
    if(numberText === 10){
        warningBox.classList.remove("hidden")
        return
    }
    numberText = numberText+1
    number.innerText = numberText

}
increase.addEventListener('click',increaseNumber)

function decreaseNumber(){
    numberText = Number(numberText)
    if(numberText === -10){
        warningBox.classList.remove("hidden")
        return
    }
    numberText = numberText-1
    number.innerText = numberText
}


decrease.addEventListener('click',decreaseNumber)


function closeWarningBoxHandler(){
    warningBox.classList.add("hidden")
}

closeBtn.addEventListener("click",closeWarningBoxHandler)