// Interface inheritance
// =====================

interface IBase {
    id: number;
}

interface IDerivedFromBase extends IBase {
    name: string;
}

class InterfaceInheritanceClass implements IDerivedFromBase {
    id: number;
    name: string;
}