// Default parameters
// ==================
function concatStringsDefault( a: string, b: string, c: string = "c") {
    return a + b + c;
}

var defaultConcat = concatStringsDefault("a", "b");
console.log(`defaultConcat : ${defaultConcat}`);