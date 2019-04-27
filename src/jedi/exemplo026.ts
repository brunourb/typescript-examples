// Classes
// =======

interface ISimpleClass {
    id: number;
    print(): void;
}

class SimpleClass {
    id: number;
    print() : void {
        console.log(`SimpleClass has id : ${this.id}`);
    }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 1001;
mySimpleClass.print();