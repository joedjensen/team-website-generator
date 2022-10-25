const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const generateHTML = require("./dist/generateHTML")

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
        checkId(id)
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
        checkId(id)
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
        checkId(id)
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
    generateHTML(employees)
}

function checkId(id) {
    let match = employees.filter(employee => employee.id === id)
    if (match.length > 0) {
        throw new Error(`ID ${id} already in use by ${match[0].name}`)
    }
}
