const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const generateHTML = require("./src/generateHTML")

employees = []

addManager()

function addManager() {
    inquirer.prompt(
        [
            {
                name: "name",
                message: "What is the managers name?",
                validate:checkString
            },
            {
                name: "id",
                message: "What is the managers employee ID?",
                validate: checkId
            },
            {
                name: "email",
                message: "What is the managers email address?",
                validate:checkEmail
            },
            {
                name: "officeNumber",
                message: "What is the managers office number?",
                validate:checkNumber
            }
        ]
    ).then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber)
        employees.push(manager)
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
                message: "What is the engineers name?",
                validate:checkString
            },
            {
                name: "id",
                message: "What is the engineers employee ID?",
                validate: checkId
            },
            {
                name: "email",
                message: "What is the engineers email address?",
                validate: checkEmail
            },
            {
                name: "github",
                message: "What is the engineers github username?",
                validate: checkString
            }
        ]
    ).then(({ name, id, email, github }) => {
        const engineer = new Engineer(name, id, email, github)
        employees.push(engineer)
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
                message: "What is the interns name?",
                validate: checkString
            },
            {
                name: "id",
                message: "What is the interns employee ID?",
                validate:checkId
            },
            {
                name: "email",
                message: "What is the interns email address?",
                validate: checkEmail
            },
            {
                name: "school",
                message: "What is the interns school?",
                validate: checkString
            }
        ]
    ).then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school)
        employees.push(intern)
        promptForEmployees()
    }).catch((err) => {
        console.error(err.message)
        addIntern()
    })
}

function exit() {
    generateHTML(employees)
}

async function checkId(id) {
    let isNumber = await checkNumber(id)
    if (!(isNumber === true)) {
        return isNumber
    }
    let match = employees.filter(employee => employee.id === id)
    if (match.length > 0) {
        return (`ID ${id} already in use by ${match[0].name}`)
    }
    return true
}
async function checkNumber(number){
    if (isNaN(number)) {
        return "Expected parameter to be an integer"
    } else return true
}
async function checkEmail(email){
    if (email.match(/.+\@.+\..+/g)){
        return true
    } else return "Expected parameter 'email' to follow simple email form e.g. 'anychars@more.evenmore'"
}

async function checkString(string) {
    if (typeof string !== "string" || !string.trim().length) {
        return "Expected parameter to be a non-empty string"
    } else return true
}