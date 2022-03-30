

for (var i = 1; i <= 100; i++){
    
    if(i%3 === 0){
        console.log("fizz")
    }
    if (i%5 === 0){
        console.log("buzz")
    }
    if (i%3 === 0 && i%5 === 0){
        console.log("fizzbuzz")
    }
    if(i%3 != 0 && i%5 != 0){
        console.log(i)
    }
}

// var res ="";
// for(var i=0; i<10; i++){
//     res += "**"
//     console.log(res);
// }
