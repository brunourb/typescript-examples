// Optional parameters
// ===================
function concatStrings( a: string, b: string, c?: string) {
    return a + b + c;
}

var concat3strings = concatStrings("a", "b", "c");
console.log(`concat3strings : ${concat3strings}`);
var concat2strings = concatStrings("a", "b");
console.log(`concat2strings : ${concat2strings}`);
// generates a compile error
//var concat1string = concatStrings("a");