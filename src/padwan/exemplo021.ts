// Type aliases
// ============
type StringOrNumber = string | number;

function addWithAlias(arg1 : StringOrNumber,arg2 : StringOrNumber) {
    return arg1.toString() + arg2.toString();
}

type CallbackWithString = (arg0: string) => void;

function usingCallbackWithString( callback: CallbackWithString) {
    callback("this is a string");
}