const Manager = require("../lib/Manager")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")
const fs = require("fs")


function generateHTML(employees) {
    let cards = employees.map(employee => generateCard(employee))
    let generatedHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">    <title>My Team</title>
    </head>
    <body>
        <div class="jumbotron text-center bg-danger text-white">
            <h1>My Team</h1>
        </div>
        <div class="container">
            <div class="row justify-content-around">
            ${cards.join("\n")}
            </div>
        </div>
    </body>
    </html>`
    fs.writeFile(`./dist/GENERATEDHTML.html`, generatedHtml, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("file written successfully")
        }
    })
}
function generateCard(employee) {
    return `<div class="col-12 col-md-6 col-lg-4">
                <div class="card mb-5 shadow">
                    <div class="card-header bg-primary text-white">
                        <h4>${employee.getName()}</h4>
                        <h5><i class="fa-solid ${employee.getIcon()}"></i> ${employee.getRole()}</h5>
                    </div>
                    <div class="card-body bg-light">
                        <div class="list-group">
                            <li class="list-group-item">ID: ${employee.getId()}</li>
                            <li class="list-group-item">Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a>
                            </li>
                            <li class="list-group-item">${employee.getExtraInfoName()}: ${employee.getExtraInfo()}</li>
                        </div>
                    </div>
                </div>
            </div>`
}

module.exports = generateHTML;