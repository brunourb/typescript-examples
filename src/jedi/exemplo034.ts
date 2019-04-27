// Namespaces
// ==========

namespace FirstNameSpace {
    class NotExported {
    }
    export class NameSpaceClass {
        id: number;
    }
}

let firstNameSpace = new FirstNameSpace.NameSpaceClass();
// generates compile error
//let notExported = new FirstNameSpace.NotExported();

namespace SecondNameSpace {
    export class NameSpaceClass {
        name: string;
    }
}

let secondNameSpace = new SecondNameSpace.NameSpaceClass();

// generates compile error
// firstNameSpace = secondNameSpace;