// Functions
// =========
function addNumbers(a: number, b: number) : string  {
    // generates a compile error
    // return (a + b);
    return (a + b).toString();
}
var addResult = addNumbers(2,3);
console.log(`addNumbers returned : ${addResult}`);