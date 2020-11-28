const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

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
        console.log(chalk.blue('Title: ' + argv.title))
        console.log(chalk.blue('Body: ' + argv.body))
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
        notes.test()
    }
})

yargs.parse()
//console.log(yargs.argv)

//command line: node argv.js add --title="ttt" --body="bbb"

