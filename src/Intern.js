const Employee = require("./Employee");

function Intern (name, id, email, school) {
    Employee.call(name, id, email);
    this.school = school;
}

Intern.prototype.getSchool = function () {
    return this.school;
}

Intern.prototype.getRole = function () {
    return 'Intern';
}

module.exports = Intern;