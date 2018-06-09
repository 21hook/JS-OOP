/* ES6 syntax sugar for the exactly same functionality of OOP */
/* build class hierarchies; more and more concrete */
class Employee {
    constructor() {
        this.name = '';
        this.dept = 'general';
    }
}

class Manager extends Employee {
    constructor() {
        super(); // create/init its parent rep
        this.reports = [];
    }
}

class WorkBee extends Employee {
    constructor() {
        super(); // create its parent rep
        this.projects = [];
    }
}

class Engineer extends WorkBee {
    constructor() {
        super();
        this.dept = 'engineering';
        this.machine = '';
    }
}

let eng = new Engineer(); // create Engineer instance
let worker = new WorkBee();
let emp = new Employee();