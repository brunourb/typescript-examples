// Template strings
// ================
var myVariable = "test";
console.log("myVariable=" + myVariable);

console.log(`myVariable=${myVariable}`);

console.log(`complexType: ${complexType.id} ${complexType.name}`);

// genrates a compile error
//complexType = { id: 2 };