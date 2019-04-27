// Constructor access modifiers
// ============================

class classWithAutomaticProperties {
    constructor(public id: number, private name: string){
    }
}

let myAutoClass = 
    new classWithAutomaticProperties(1, "className");
console.log(`myAutoClass id: ${myAutoClass.id}`);

//console.log(`myAutoClass.name: ${myAutoClass.name}`);

// Readonly properties
// ===================

class ClassWithReadOnly {
    readonly name: string;
    constructor(_name : string) {
        this.name = _name;
    }
    setReadOnly(_name: string) {
        // generates a compile error
        // this.name = _name;
    }
}