const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./utils.js')
const command = process.argv

console.log(command)

const msg = getNotes()
//console.log(chalk.blue.inverse.bold(validator.isURL(msg)) + chalk.yellow(msg))

command.forEach(element => {
    if (command === 'add'){
        console.log('adding notes')
    }
    else if (command === 'remove'){
        console.log('removing note')
    }
    else{
        console.log(element)
    }
});






