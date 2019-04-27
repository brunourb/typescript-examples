// Type guards
// ===========
function addWithTypeGuard(
    arg1 : string | number,
    arg2 : string | number
    ) : string | number     
    {
    if( typeof arg1 ==="string") {
        // arg1 is treated as string within this code
        console.log('first argument is a string');
        return arg1 + arg2;
    } 
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // arg1 and arg2 are treated as numbers within this code
        console.log('both arguments are numbers');
        return arg1 + arg2;
    }
    console.log('default return');
    return arg1.toString() + arg2.toString();
}

console.log(`addWithTypeGuard(1,2)= ${addWithTypeGuard(1,2)}`) ;
console.log(`addWithTypeGuard("1","2")= ${addWithTypeGuard("1","2")}`) ;
console.log(`addWithTypeGuard(1,"2")= ${addWithTypeGuard(1,"2")}`) ;