import 'reflect-metadata';
// npm install reflect-metadata --save
// npm install @types/reflect-metadata --save

function logType(target : any, key : string) {
    var t = Reflect.getMetadata("design:type", target, key);
    console.log(`${key} type: ${t.name}`);
  }

  class Demo{ 
    @logType // apply property decorator
    public attr1 : string;
  }