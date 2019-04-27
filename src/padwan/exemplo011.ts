// Const enums
// ===========
const enum DoorStateConst {
    Open,
    Closed,
    Ajar
}

var constDoorOpen = DoorStateConst.Open;
console.log(`constDoorOpen is : ${constDoorOpen}`);

// generates a compile error
//console.log(`${DoorStateConst[0]}`);

console.log(`${DoorStateConst["Open"]}`);