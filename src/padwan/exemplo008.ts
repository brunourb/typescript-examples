// Const and let
// =============

// with strictNullChecks, this generates an error
// console.log(`anyValue = ${anyValue}`);
var anyValue = 2;
console.log(`anyValue = ${anyValue}`);

// generates a compile error
//console.log(`letValue = ${lValue}`);
let lValue = 2;
console.log(`lValue = ${lValue}`);

if (lValue == 2) {
    let lValue = 2001;
    console.log(`block scoped lValue : ${lValue} `);
}
console.log(`lValue = ${lValue}`);



const constValue = "test";
// generates a compile error
//constValue = "updated";