/* build class hierarchies; more and more concrete */
class Employee {
    constructor(name, dept) {
        /* object private vars */
        this.name = name || '';
        this.dept = dept || 'general';
    }

    /* object private methods */
    getName() { // accessor
        return this.name;
    }

    getDept() {
        return this.dept;
    }

    setName(val) { // mutator
         return this.name = val;
    }

    setDept(val) {
        return this.dept = val;
    }

    /* object public methods */
    static getCompany() {
        return 'XXX Inc.'
    }
}


let emp = new Employee('21hook', 'IT Tec');
console.log(Employee.getCompany());



