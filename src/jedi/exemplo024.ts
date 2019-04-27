// Interfaces
// ==========

interface IComplexType {
    id: number;
    name: string;
    //constructor(arg1: any, arg2: any);
    // print(): string;
    // usingTheAnyKeyword(arg1: any): any;
    // usingOptionalParameters(optionalArg1?: number);
    // usingDefaultParameters(defaultArg1?: number);
    // usingRestSyntax(...argArray: number []);
    // usingFunctionCallbacks(callback: (id: number) => string);
}''

let complexTypeInterface : IComplexType;
complexTypeInterface = { id: 1, name : "test" };

// generates a compile error
// let incompleteType : IComplexType;
// incompleteType = { id : 1};