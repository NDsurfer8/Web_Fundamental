// function over(element) {
//     ("mouseover");    
// }
    
// function out(element) {
//     ("mouseout");    
// }

function over(element){
    console.log("over")
    console.log(element)
    element.src = "images/assets/succulents-2.jpg"
    
    
}

function out(element){
    console.log("out")
    console.log(element)
    element.src = "images/assets/succulents-1.jpg"
}

function hide() {
    var warning_container  = document.querySelector(".warning_container");
    warning_container.remove()
}
