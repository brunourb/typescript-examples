import 'reflect-metadata';
// npm install reflect-metadata --save
// npm install @types/reflect-metadata --save

//  Class decorator parameters
//  ==========================

function classConstructorDec(constructor: Function) {
    console.log(`constructor : ${constructor}`);
    console.log(`constructor.name : ${(<any>constructor).name}`);
    constructor.prototype.testProperty = "testProperty_value";
}

@classConstructorDec
class ClassWithConstructor {
}

let classConstrInstance = new ClassWithConstructor();
console.log(`classConstrInstance.testProperty : ${(<any>classConstrInstance).testProperty}`);