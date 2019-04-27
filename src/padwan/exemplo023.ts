// object rest and spread
// ======================
let firstObj = { id: 1, name : "firstObj"};

let secondObj = { ...firstObj };
console.log(`secondObj.id : ${secondObj.id}`);
console.log(`secondObj.name : ${secondObj.name}`);

let nameObj = { name : "nameObj"};
let idObj = { id : 2};

let obj3 = { ...nameObj, ...idObj };
console.log(`obj3.id : ${obj3.id}`);
console.log(`obj3.name : ${obj3.name}`);

let obj4 = { ...firstObj, ...idObj };
console.log(`obj4.id : ${obj4.id}`);
console.log(`obj4.name : ${obj4.name}`);