const Employee = require("./Employee");

function Manager (name, id, email, officeNumber) {
    Employee.call(this, name, id, email);
    this.officeNumber = officeNumber;
}

var copyEmployeePrototype = Object.create(Manager.prototype);
copyEmployeePrototype.constructor = Manager;
Manager.prototype = copyEmployeePrototype;

Manager.prototype.getRole = function () {
    return 'Manager';
}

module.exports = Manager;
