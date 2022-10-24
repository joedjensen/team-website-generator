const Employee = require("../lib/Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }
        this.school = school
    }
}

Intern.prototype.getSchool = function () {
    return this.school
}

Intern.prototype.getRole = function () {
    return 'Intern'
}

module.exports = Intern