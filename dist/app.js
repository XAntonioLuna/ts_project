"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2022;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = this.reports[0];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        return new AccountingDepartment('AC', ['A report']);
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw Error('No last report');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw Error('Invalid value');
        }
        this.addReports(value);
    }
    addEmployee(employee) {
        if (employee === 'Max') {
            return;
        }
        this.employees.push(employee);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log(`Master Department ${this.id}: ${this.name}`);
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
console.log(accounting);
console.log(it);
//# sourceMappingURL=app.js.map