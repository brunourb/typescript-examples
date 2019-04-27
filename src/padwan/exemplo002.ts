var myString : string;
var myNumber : number;
var myBoolean : boolean;

myString = "1";
myNumber = 1;
myBoolean = true;

// causes compilation errors
// myString = myNumber;
// myBoolean = myString;
// myNumber = myBoolean;

myString = myNumber.toString();
myBoolean = (myString === "test");
if (myBoolean) {
    myNumber = 1;
}