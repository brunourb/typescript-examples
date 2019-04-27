import 'reflect-metadata';
// npm install reflect-metadata --save
// npm install @types/reflect-metadata --save

//  Decorator factories
//  ===================

function decoratorFactory(name: string) {
    return function (constructor : Function ) {
        console.log(`decorator function called with : ${name}`);
    }
}

@decoratorFactory('testName')
class ClassWithDecoratorFactory {
    
}