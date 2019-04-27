import 'reflect-metadata';
// npm install reflect-metadata --save
// npm install @types/reflect-metadata --save

//  Method decorators
//  =================


function methodDec (target: any, 
    methodName: string, 
    descriptor?: PropertyDescriptor) {
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`target[methodName] : ${target[methodName]}`);
}

class ClassWithMethodDec {
    @methodDec
    print(output: string) {
        console.log(`ClassWithMethodDec.print (${output}) called.`);
    }
}


//  Using method decorators
//  =======================


function auditLogDec(target: any, 
    methodName: string, 
    descriptor?: PropertyDescriptor ) {
        
    let originalFunction = target[methodName];
    
    let auditFunction = function() {
        console.log(`auditLogDec : overide of ${methodName} called `);
        originalFunction.apply(this, arguments);
    }
    
    target[methodName] = auditFunction;
}

class ClassWithAuditDec {
    @auditLogDec
    print(output: string) {
        console.log(`ClassWithMethodDec.print (${output}) called.`);
    }
}

let auditClass = new ClassWithAuditDec();
auditClass.print("test");