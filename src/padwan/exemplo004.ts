// Duck typing
// ===========
var complexType = { name: "myName", id : 1 };
complexType = { id: 2, name : "anotherName" };
// generates a compile error
// complexType = { id: 1};
//complexType = { name : "extraproperty", id : 2, extraProp: true };