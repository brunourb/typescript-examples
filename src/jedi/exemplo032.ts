// Class property accessors
// ========================

class ClassWithAccessors {
    private _id : number;
    get id() {
        console.log(`inside get id()`);
        return this._id;
    }
    set id(value:number) {
        console.log(`inside set id()`);
        this._id = value;
    }
}

var classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 2;
console.log(`id property is set to ${classWithAccessors.id}`);