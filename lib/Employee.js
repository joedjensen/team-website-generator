function Employee(name, id, email) {
    if (typeof name !== "string" || !name.trim().length) {
        throw new Error("Expected parameter 'name' to be a non-empty string");
    }
    
    if (typeof id !== "number" || !id) {
        throw new Error("Expected parameter 'id' to be an integer");
    }

    if (typeof email !== "string" || !email.trim().length) {
        throw new Error("Expected parameter 'email' to be a non-empty string");
    }
    this.name = name
    this.id = id
    this.email = email
}

Employee.prototype.getName = function() {
    return this.name;
}

Employee.prototype.getId = function() {
    return this.id;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

module.exports = Employee;