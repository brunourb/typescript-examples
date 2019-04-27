// For ... of
// ==========

var arrayOfStrings : string[] = ["first", "second", "third"];

for( var i = 0; i < arrayOfStrings.length; i++ ) {
    console.log(`arrayOfStrings[${i}] = ${arrayOfStrings[i]}`);
}

for( var itemKey in arrayOfStrings) {
    var itemValue = arrayOfStrings[itemKey];
    console.log(`arrayOfStrings[${itemKey}] = ${itemValue}`);
}

for( var arrayItem of arrayOfStrings ) {
    console.log(`arrayItem = ${arrayItem} `);
}