// Union types
// ===========
var unionType : string | number;

unionType = 1;
console.log(`unionType : ${unionType}`);

unionType = "test";
console.log(`unionType : ${unionType}`);

function addWithUnion( arg1: string | number, arg2: string | number) {
    
    return arg1.toString() + arg2.toString();
}
console.log(`addWithUnion(1,2)= ${addWithUnion(1,2)}`) ;
console.log(`addWithUnion("1","2")= ${addWithUnion("1","2")}`) ;