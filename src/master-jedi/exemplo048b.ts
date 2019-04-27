import 'reflect-metadata';
// npm install reflect-metadata --save
// npm install @types/reflect-metadata --save

function logParamTypes(target : any, key : string) {
    var types = Reflect.getMetadata("design:paramtypes", target, key);
    var s = types.map((a: { name: any; }) => a.name).join();
    console.log(`${key} param types: ${s}`);

    var r = Reflect.getMetadata("design:returntype", target, key);
    console.log(`${key} param types: ${r.name}`);
  }  


  class Foo {}
    interface IFoo {}

    class Demo{ 
      @logParamTypes // apply parameter decorator
      doSomething(
        param1 : string,
        param2 : number,
        param3 : Foo,
        param4 : { test : string },
        param5 : IFoo,
        param6 : Function,
        param7 : (a : number) => void,
      ) : number { 
          return 1
      }
    }