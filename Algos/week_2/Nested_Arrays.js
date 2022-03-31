var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we

console.log(arr2d[0][2]);

// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// complete the following function

function flatten(arr2d) {
    var flat = [];
    // your code here
    for(var i=0; i<arr2d.length; i++){
        //arr2d[index]
        //ind = 0 -> [2,5,8]
        // index = 1 -> [3,6,1]
        //index = 2 -> [5,7,7]
    }
    // nested loop

    for(var pixxa =0; pizza < arr2d[index].length; pizza++)
        console.log("inner Element:",arr2d[ind][innderInd]])
// arr2d[index][pizza]
// i = 0, -> 2,5,8

    //push the numbers to plat
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]







var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    for (var ind = 0; ind < arr2d.length; ind++) {
        console.log("Ind:", ind)
        // arr2d[ind]
        // ind = 0, -> [2, 5, 8]
        // ind = 1, -> [3, 6, 1]
        // ind = 2, -> [5, 7, 7]
        console.log("Outer Array:",arr2d[ind]) // For testing

        // nested loop
        for (var innerInd = 0; innerInd < arr2d[ind].length; innerInd++) {
            console.log("Inner Element:",arr2d[ind][innerInd])
            // arr2d[ind][innerInd]
            // ind = 0, -> 2 -> 5 -> 8
            // ind = 1, -> 3 -> 6 -> 1
            // ind = 2, -> 5 -> 7 -> 7

            // push the numbers to flat
            flat.push(arr2d[ind][innerInd])
        }
        console.log("Nested for loop finished")
    }
    console.log("Outer for loop finished. Returning flat array")
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

