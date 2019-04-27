import 'reflect-metadata';
// npm install reflect-metadata --save
// npm install @types/reflect-metadata --save

//  Parameter decorators
//  ====================


function parameterDec(target: any, 
    methodName : string, 
    parameterIndex: number) {
    
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`parameterIndex : ${parameterIndex}`);    
        
}

class ClassWithParamDec {
    print(@parameterDec  value: string) {
        
    }
}