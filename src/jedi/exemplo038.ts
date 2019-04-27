// Function overloading
// ====================

class BaseClassWithFunction {
    public id : number;
    getProperties() : string {
        return `id: ${this.id}`;
    }
}

class DerivedClassWithFunction 
    extends BaseClassWithFunction {
        public name: string;
        getProperties() : string {
            return `${super.getProperties()}`
            + ` , name: ${this.name}`;
        }
    }

var derivedClassWithFunction = new DerivedClassWithFunction();
derivedClassWithFunction.id = 1;
derivedClassWithFunction.name = "derivedName";
console.log(derivedClassWithFunction.getProperties());