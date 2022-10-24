const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        if (isNaN(officeNumber)) {
            throw new Error("Expected parameter 'office number' to be an integer");
        }
        this.officeNumber = officeNumber
    }
}

Manager.prototype.getRole = function() {
    return "Manager"
}

module.exports = Manager