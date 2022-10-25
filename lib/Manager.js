const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        if (isNaN(officeNumber)) {
            throw new Error("Expected parameter 'office number' to be an integer");
        }
        this.officeNumber = officeNumber
    }
   getRole() {
        return "Manager"
    }


    getExtraInfo() {
        return this.officeNumber
    }

    getExtraInfoName() {
        return "Office Number"
    }

    getIcon() {
        return "fa-mug-hot"
    }
}



module.exports = Manager