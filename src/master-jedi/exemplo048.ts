import 'reflect-metadata';
//  Decorator metadata
//  ==================

// npm install reflect-metadata --save
// npm install @types/reflect-metadata --save

function metadataParameterDec(target: any, methodName : string, parameterIndex: number) {

   let designType = Reflect.getMetadata("design:type", target, methodName);
   console.log(`designType: ${designType}`)    
   
   let designParamTypes = Reflect.getMetadata("design:paramtypes", target, methodName);
   console.log(`paramtypes : ${designParamTypes}`);
   
   let designReturnType = Reflect.getMetadata("design:returntype", target, methodName);
   console.log(`returntypes : ${designReturnType}`);
}


class ClassWithMetaData {
    print(@metadataParameterDec id: number, name: string) : number {
        return 1000;
    }
}