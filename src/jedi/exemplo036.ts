// Class inheritance
// =================

class BaseClass implements IBase {
    id: number;
}

class DerivedFromBaseClass
    extends BaseClass
    implements IDerivedFromBase {
    name: string;
}


interface IFirstInterface {
    id: number
}
interface ISecondInterface {
    name: string;
}
class MultipleInterfaces
    implements IFirstInterface, ISecondInterface {
    id: number;
    name: string;
}