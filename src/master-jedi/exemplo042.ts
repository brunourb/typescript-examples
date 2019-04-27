import 'reflect-metadata';
// npm install reflect-metadata --save
// npm install @types/reflect-metadata --save

//  Decorators
//  ==========


//  Decorator syntax
//  ================

function simpleDecorator(constructor : Function) {
    console.log('simpleDecorator called.');
}

@simpleDecorator
class ClassWithSimpleDecorator {
    
}

let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();

console.log(`instance_1 : ${instance_1}`);
console.log(`instance_2 : ${instance_2}`);


function secondDecorator(constructor : Function) {
    console.log('secondDecorator called.')
}

@simpleDecorator
@secondDecorator
class ClassWithMultipleDecorators {
    
}