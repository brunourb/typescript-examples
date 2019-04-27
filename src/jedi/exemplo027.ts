// Implementing Intefaces
// =========
class ClassA implements IPrint {
    print() { console.log('ClassA.print()') };
}

class ClassB implements IPrint {
    print() { console.log(`ClassB.print()`)};
}

interface IPrint {
    print() : any;
}

function printClass( a : IPrint ) {
    a.print();
}

let classA = new ClassA();
let classB = new ClassB();

printClass(classA);
printClass(classB);