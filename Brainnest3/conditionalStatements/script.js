function displayLargerNumber(a , b) {
    if(a > b){
        console.log("a > b");
    }else if (a < b){
        console.log("a < b");
    }else {
        console.log("a = b");
    }
};

displayLargerNumber(3, 3);


function isOdd(a){
    if(a % 2 == 0){
        console.log("even number");
    }else {
        console.log("odd number");
    }
}

isOdd(4);