import 'reflect-metadata';
// npm install reflect-metadata --save
// npm install @types/reflect-metadata --save

//  Property decorators
//  ===================

function propertyDec(target: any, propertyKey : string) {
    // console.log(`target : ${target}`);
    // console.log(`target.constructor : ${target.constructor}`);
    
    if(typeof(target) === 'function') {
        console.log(`class name : ${target.name}`);
    } else {
        console.log(`class name : ` 
            + `${target.constructor.name}`);    
    }
    
    console.log(`propertyKey : ${propertyKey}`);
}

class ClassWithPropertyDec {
    @propertyDec
    name: string;
}

class StaticClassWithPropertyDec {
    @propertyDec
    static name1: string;
}
