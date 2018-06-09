let employee = {};

Object.defineProperty(employee, 'name', {
    value: '21hook',
    // configurable: false,
    // writable: false,
    // enumerable:false
});

console.log(employee.name);

Object.defineProperty(employee, 'dept', {
    value: 'IT',
    configurable: true,
    writable: true,
    enumerable: true
});

employee.dept = 'Design';
console.log(employee.dept);


/* data / (read & write) descriptor cannot apply together */
var sex = 'female';
Object.defineProperty(employee, 'sex', {
   get() { // the property is bound/associated to the method(exactly 1-to-1); called when the property is accessed
       // this.sex -> get() -> this.sex -> get()... infinite recursion
       return sex;
   },


   set(val) { // called when the property is mutated
       return sex = val;
   }
});

console.log(employee.sex);

employee.sex = 'male';
console.log(employee.sex);