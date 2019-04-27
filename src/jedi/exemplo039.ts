// Protected class members
// =======================

class ClassUsingProtected {
    protected id : number;
    public getId() {
        return this.id;
    }
}

class DerivedFromProtected 
    extends ClassUsingProtected  {
    constructor() {
        super();
        this.id = 0;
    }
}

var derivedFromProtected = new DerivedFromProtected();
// generates compile error
//derivedFromProtected.id = 1;
console.log(`getId returns: ${derivedFromProtected.getId()}`);