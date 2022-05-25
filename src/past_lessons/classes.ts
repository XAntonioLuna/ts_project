abstract class Department{
    // private readonly id: string;
    // private name:string;
    static fiscalYear = 2022;

    // Similar to other languages "protected" grants access within the class and its children
    protected employees: string[] = [];

    constructor(protected readonly id: string, protected name: string) {
        // this.name = n;
    }

    static createEmployee(name: string) {
        return {name: name};
    }
    // "this" is optional but it helps avoid error scenarios like the one described below
    abstract describe(this: Department): void;

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        // If we call super it MUST be before using "this"
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log(`Department ${this.id}: ${this.name}`)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    static getInstance() {
        // In a static environment "this" refers to the class not the instance
        if (this.instance) {
            return this.instance
        }
        return new AccountingDepartment('AC', ['A report']);
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw Error('No last report');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw Error('Invalid value');
        }
        this.addReports(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = this.reports[0];
    }

    addEmployee(employee: string): void {
        if (employee === 'Max') {
            return;
        }

        this.employees.push(employee)
    }

    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text
    }

    printReports () {
        console.log(this.reports);
    }

    describe() {
        console.log(`Master Department ${this.id}: ${this.name}`)
    }
}

const employee1 = Department.createEmployee('Sara');
console.log(employee1);
console.log(Department.fiscalYear);

const it = new ITDepartment('IT', ['Barbie']);
const accounting = AccountingDepartment.getInstance();

accounting.addEmployee('Antonio');
accounting.addEmployee('Barbie');
accounting.describe();
accounting.printEmployeeInformation();
console.log(accounting.mostRecentReport);
accounting.addReports('Report 1');
accounting.printReports();

accounting.mostRecentReport = 'Magical report';
console.log(accounting.mostRecentReport);
accounting.printReports();

it.addEmployee('Paco');
it.addEmployee('Victor');

it.describe();

/* To protect from this usage, we add "this" to the class' methods
const accountingCopy = {describe: accounting.describe};
accountingCopy.describe();
*/

console.log(accounting);
console.log(it);
