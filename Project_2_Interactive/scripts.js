// zoom in and out of clown

var trigger = document.querySelector(".trigger")
var body = document.querySelector("body")
var audio = document.querySelector('audio')

trigger.addEventListener("click", zoom)

function zoom() {
    console.log("it works")

    if (body.id != "zoom") {
        body.id = "zoom"
    } 
    
    else { 
        body.id = ""
    } 
}


