//h3 and button



var count = 3;
var countElement = document.querySelector("#count");

console.log(countElement);

function add1(){
    
    count++;
    countElement.innerText = count;
    console.log(count);
}




var count2 = 3;
var count2Element = document.querySelector("#count2");

console.log(count2Element);

function add2(){ 
    count2++;
    count2Element.innerText = count2;
    console.log(count2);
}

var count3 = 3;
var count3Element = document.querySelector("#count3");

console.log(count3Element);

function add3(){ 
    count3++;
    count3Element.innerText = count3;
    console.log(count3);
}




// // 1. EVENT LISTENER - HTML
// // 2. EVENT HANDLER FUNCTION - JavaScript

// // METHOD - QUERY SELECTOR
// var likes = 13
// function likeHandler(){
//     // INCREMENT LIKES
//     likes++
//     // TARGETING THE BUTTON USING QUERY SELECTOR
//     var likesButton = document.querySelector(".likes")
//     likesButton.innerText = likes + " Like(s)"





