const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./utils.js')
const notes = require('./notes.js')
const command = process.argv

// console.log(command)

// const msg = getNotes()
// console.log(chalk.blue.inverse.bold(validator.isURL(msg)) + chalk.yellow(msg))

// command.forEach(element => {
//     if (command === 'add'){
//         console.log('adding notes')
//     }
//     else if (command === 'remove'){
//         console.log('removing note')
//     }
//     else{
//         console.log(element)
//     }
// });


//create add command
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('removing a note')
    }
})

yargs.parse()
// console.log(yargs.argv)



//command line: node argv.js add --title="ttt" --body="bbb"

