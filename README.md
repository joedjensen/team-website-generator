# Team Website Generator
This repo contains an application that will generate a team website based on user input. User will be prompted for at least a manager and optional engineers and interns. Cards with contact info will be generated for each employee.

This repository utilizes
* JavaScript
* Node
* npm
* Inquirer
* jest

[Video](https://drive.google.com/file/d/1FmHZ49S6k-DOKSSNgOS9k5Wd26ELq0W7/view)

## Installation 

Make sure you have node installed.
```sh
npm install
```

## Usage 

```sh
node index.js
```
And respond to the prompts! Then go checkout your `GENERATEDHTML.html`

## Tests
Run tests with
```sh
npm run test
```

## Code Snippets
The most interesting code snippets are related to input validation. For ids, we check both that they are numbers and they are not previously used to.
```Javascript
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
```
And for emails we use a minimal regex
```Javascript
async function checkEmail(email){
    if (email.match(/.+\@.+\..+/g)){
        return true
    } else return "Expected parameter 'email' to follow simple email form e.g. 'anychars@more.evenmore'"
}
```



## License

Refer to the license in the Github repo.
