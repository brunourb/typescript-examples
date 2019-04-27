// Optional properties
// ===================
interface IOptionalProp {
    id: number;
    name?: string;
}

let idOnly : IOptionalProp = { id: 1 };
let idAndName : IOptionalProp = { id: 2, name : "idAndName" };

idAndName = idOnly;