function doCalculation(
    a : number,
    b : number,
    c : number) {
    return ( a * b ) + c;
}

var result = doCalculation(3,2,1);
console.log("doCalculation():" + result);

// causes compilation errors
// result = doCalculation("1", "2", "3");
// console.log("doCalculation():" + result);