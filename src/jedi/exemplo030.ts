// Class modifiers
// ===============

class ClassWithPublicProperty {
    public id: number;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;

class ClassWithPrivateProperty {
    private id: number;
    constructor(_id : number) {
        this.id = _id;
    }
}

let privateAccess = new ClassWithPrivateProperty(10);
// generates compile errors
//privateAccess.id = 20;

class ClassWithModifiers {
    private id: number;
    private name: string;
    constructor(_id: number, _name: string) {
        this.id = _id;
        this.name = _name;
    }
    private updateNameFromId() {
        this.name = `${this.id}_name`;
    }
}

var classWithModifiers = new ClassWithModifiers(1, "className");
// generates compile errors
//classWithModifiers.id = 1;
//classWithModifiers.updateNameFromId();