const Employee = require("../lib/Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
        this.github = github
    }
}

Engineer.prototype.getGithub = function () {
    return this.github
}

Engineer.prototype.getRole = function () {
    return "Engineer"
}

module.exports = Engineer