let sex = 'female';
let employee = {
    name: '21hook',
    dept: 'IT',
    get sex() { // the property is bound/associated to the method(exactly 1-to-1); called when the property is accessed
        // this.name -> get() -> this.name -> get()... infinite recursion
        return sex;
    },

    set sex(val) { // called when the property is mutated
        return sex = val;
    }
};

console.log(employee.sex);

employee.sex = 'male';
console.log(employee.sex);

