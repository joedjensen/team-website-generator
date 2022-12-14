let emailRegex = /.+\@.+\..+/g
class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        
        if (isNaN(id)) {
            throw new Error("Expected parameter 'id' to be an integer");
        }
    
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id
    }
    getEmail() {
        return this.email;
    }
    
    getRole() {
        return "Employee";
    }

    getIcon(){
        return "fa-question"
    }
}

module.exports = Employee;