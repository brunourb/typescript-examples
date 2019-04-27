// Function overloads
// ==================

function add(a: string, b: string) : string;
function add(a: number, b:number) : number;
function add(a: any, b: any): any {
    return a + b;
}

console.log(`add(1,1)= ${add(1,1)}`);
console.log(`add("1","1")= ${add("1","1")}`);

//console.log(`add(true,false)= ${add(true,false)}`);