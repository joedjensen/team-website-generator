const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const fs = require("fs")

employees = []

addManager()

function addManager() {
    inquirer.prompt(
        [
            {
                name: "name",
                message: "What is the managers name?"
            },
            {
                name: "id",
                message: "What is the managers employee ID?"
            },
            {
                name: "email",
                message: "What is the managers email address?"
            },
            {
                name: "officeNumber",
                message: "What is the managers office number?"
            }
        ]
    ).then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber)
        employees.push(manager)
        console.log(employees)
        promptForEmployees()
    }).catch((err) => {
        console.error(err.message)
        addManager()
    })
}


function promptForEmployees() {
    inquirer.prompt(
        [
            {
                name: "nextScreen",
                message: "What would you like to do next?",
                type: "list",
                choices: ['Add an engineer', 'Add an intern', 'Exit']
            },
        ]
    ).then((response) => {
        switch (response.nextScreen) {
            case "Add an engineer":
                addEngineer()
                break
            case "Add an intern":
                addIntern()
                break
            case "Exit":
                exit()
                break
        }
    })
}

function addEngineer() {
    inquirer.prompt(
        [
            {
                name: "name",
                message: "What is the engineers name?"
            },
            {
                name: "id",
                message: "What is the engineers employee ID?"
            },
            {
                name: "email",
                message: "What is the engineers email address?"
            },
            {
                name: "github",
                message: "What is the engineers github username?"
            }
        ]
    ).then(({ name, id, email, github }) => {
        const engineer = new Engineer(name, id, email, github)
        employees.push(engineer)
        console.log(employees)
        promptForEmployees()
    }).catch((err) => {
        console.error(err.message)
        addEngineer()
    })
}

function addIntern() {
    inquirer.prompt(
        [
            {
                name: "name",
                message: "What is the interns name?"
            },
            {
                name: "id",
                message: "What is the interns employee ID?"
            },
            {
                name: "email",
                message: "What is the interns email address?"
            },
            {
                name: "school",
                message: "What is the interns school?"
            }
        ]
    ).then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school)
        employees.push(intern)
        console.log(employees)
        promptForEmployees()
    }).catch((err) => {
        console.error(err.message)
        addIntern()
    })
}

function exit() {
    return
}
