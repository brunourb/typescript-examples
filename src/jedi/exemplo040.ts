// Abstract classes
// ================

class Employee {
    public id: number;
    public name: string;
    printDetails() {
        console.log(`id: ${this.id}` 
         + `, name ${this.name}`);
    }
}

class Manager {
    public id: number;
    public name: string;
    public Employees: Employee[];
    printDetails() {
        console.log(`id: ${this.id} `
            + `, name ${this.name}, `
            + ` employeeCount ${this.Employees.length}`);
    }
}

abstract class AbstractEmployee {
    public id: number;
    public name: string;
    abstract getDetails(): string;
    public printDetails() {
        console.log(this.getDetails());
    }
}

class NewEmployee extends AbstractEmployee {
    getDetails(): string {
        return `id : ${this.id}, name : ${this.name}`;
    }
}

class NewManager extends NewEmployee {
    public Employees: NewEmployee[];
    getDetails() : string {
        return super.getDetails() 
            + `, employeeCount ${this.Employees.length}`;
    }
}

var employee = new NewEmployee();
employee.id = 1;
employee.name = "Employee Name";

employee.printDetails();

var manager = new NewManager();
manager.id = 2; 
manager.name = "Manager Name";
manager.Employees = new Array();

manager.printDetails();
