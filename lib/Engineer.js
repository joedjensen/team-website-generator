const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
        this.github = github
    }

    getGithub() {
        return this.github
    }
    
    getRole(){
        return "Engineer"
    }

    getExtraInfo() {
        return  `<a href = 'https://github.com/${this.getGithub()}'>${this.getGithub()}</a>`
    }

    getExtraInfoName() {
        return "Github"
    }

    getIcon(){
        return "fa-glasses"
    }
}



module.exports = Engineer