//  Creating new objects
//  ====================


class FirstClass {
    id: number;
}

class SecondClass {
    name: string;
}

class GenericCreator< T > {
    create(arg1: { new(): T }) : T {
        return new arg1();
    }
}

var creator1 = new GenericCreator<FirstClass>();
var firstClass: FirstClass = creator1.create(FirstClass);

var creator2 = new GenericCreator<SecondClass>();
var secondClass : SecondClass = creator2.create(SecondClass);