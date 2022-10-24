const Employee = require("./Employee");

function Engineer (name, id, email, github) {
    Employee.call(name, id, email);
    this.github = github;
}

Engineer.prototype.getGithub = function () {
    return this.github;
}

Engineer.prototype.getRole = function () {
    return 'Engineer';
}

module.exports = Engineer;