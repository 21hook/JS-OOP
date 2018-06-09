/* build class hierarchies; more and more concrete(bigger depth) */
function Employee() {
    this.name = '';
    this.dept = 'general';
}

/* build class hierarchies; more and more concrete */
function Manager() {
    /* names of the call stack, & its ancestor stacks(execution context) */
    Employee.call(this); // call the constructor; change this; create its parent rep
    this.reports = [];
}
Manager.prototype = new Employee();

/* build class hierarchies; more and more concrete */
function WorkBee() {
    /* names of the call stack, & its ancestor stacks(execution context) */
    Employee.call(this);  // create its parent rep
    this.projects = [];
}
WorkBee.prototype = new Manager();

/* build class hierarchies; more and more concrete */
function Engineer() {
    WorkBee.call(this); // init/create its parent rep
    this.dept = 'engineering';
    this.machine = '';
}
Engineer.prototype = new WorkBee();


var eng = new Engineer(); // create Engineer instance
var worker = new WorkBee();
var emp = new Employee();
