var body = document.getElementsByTagName("body")[0]
console.log(body)
function scrollHandler(){
    var myDiv = document.createElement("div")
    myDiv.classList.add("innerdiv")

    var heading = document.createElement("h2") 
    heading.classList.add("heading")

    heading.innerHTML = "This is a dynamic heading" 
    myDiv.appendChild(heading)
    body.appendChild(myDiv)
}

window.addEventListener("scroll",scrollHandler)