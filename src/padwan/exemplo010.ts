// Enums
// =====
enum DoorState {
    Open,
    Closed,
    Ajar
}

var openDoor = DoorState.Open;
console.log(`openDoor is: ${openDoor}`);

var closedDoor = DoorState["Closed"];
console.log(`closedDoor is : ${closedDoor}`);

var ajarDoor = DoorState[2];
console.log(`ajarDoor is : ${ajarDoor}`);