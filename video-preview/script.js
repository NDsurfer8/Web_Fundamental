console.log("page loaded...");

function onmouseoverHandler(element){
    console.log(element);
    element.play();
}
function onmouseoutHandler(element){
    element.pause();
}