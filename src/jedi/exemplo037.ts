// The super keyword
// =================
    
class BaseClassWithConstructor {
    private id: number;
    constructor(_id: number) {
        this.id = _id;
    }
}

class DerivedClassWithConstructor
    extends BaseClassWithConstructor {
        private name: string;
        constructor(_id: number, _name: string) {
            super(_id);
            this.name = _name;
        }
    }