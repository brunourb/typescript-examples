// null and undefined
// ==================
let x : number | undefined;

x = 1;
x = undefined;
// x = null;

let y : number | null;

// with strictNullChecks causes compile error
// y = undefined;
y = null;

function testUndef(test : null | number) {
    console.log('test parameter :' + test);
}

testUndef(null);
testUndef(1);
