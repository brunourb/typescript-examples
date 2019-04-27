// Class functions
// ===============


class ComplexType implements IComplexType {
    id: number;
    name: string;
    constructor(idArg: number, nameArg: string);
    constructor(idArg: string, nameArg: string);
constructor(idArg: any, nameArg: any) {
    // careful - assigning a string to a number type
    if (typeof idArg === "number") {
        this.id = idArg; 
    }
    this.name = nameArg;
}
    print(): void {
        console.log(`id: ${this.id} name : ${this.name}`);
    }
    usingTheAnyKeyword(arg1: any): any {
        this.id = arg1;
    }
    usingOptionalParameters(optionalArg1?: number) {
        if (optionalArg1) {
            this.id = optionalArg1;
        }
    }
    usingDefaultParameters(defaultArg1: number = 0) {
        this.id = defaultArg1;
    }
    usingRestSyntax(...argArray: number []) {
        if (argArray.length > 0) {
            this.id = argArray[0];
        }
    }
    usingFunctionCallbacks( callback: (id: number) => string  ) {
        callback(this.id);
    }

}

let ct_1 = new ComplexType(1, "ct_1");
let ct_2 = new ComplexType("abc", "ct_2");
//let ct_3 = new ComplexType(true, "test");

ct_1.print();
ct_2.print();

ct_1.usingTheAnyKeyword(true);
ct_1.usingTheAnyKeyword({ id: 1, name: "string"});

ct_1.usingOptionalParameters(1);
ct_1.usingOptionalParameters();

ct_1.usingDefaultParameters(2);
ct_1.usingDefaultParameters();

ct_1.usingRestSyntax(1,2,3);
ct_2.usingRestSyntax(1,2,3,4,5);

function myCallbackFunction(id: number): string {
    return id.toString();
}
ct_1.usingFunctionCallbacks(myCallbackFunction);