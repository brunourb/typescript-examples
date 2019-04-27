function callbackFunction(text: string) {
    console.log(`inside callbackFunction ${text}`);
}

function doSomethingWithACallback(
    initialText: string, 
    callback : (initialText: string) => void
    ) {
    console.log(`inside doSomethingWithCallback ${initialText}`);
    callback(initialText);
} 

doSomethingWithACallback("myText", callbackFunction);

//doSomethingWithACallback("myText", "this is not a function");

function callbackFunctionWithNumber(arg1: number) {
    console.log(`inside callbackFunctionWithNumber ${arg1}`)
}
// generates a compile error
//doSomethingWithACallback("myText", callbackFunctionWithNumber);