const chalk = require('chalk')
const yargs = require('yargs')

noteUtils = require('./Notes.js')

// adding note
yargs.command({
    command: 'add',
    describe: 'helps in adding a note',
    builder:{
        title:{
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        noteUtils.addN(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'helps in removing a note',
    builder:{
        title:{
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        noteUtils.removeN(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'helps in listing a note',
    handler: () => {
        noteUtils.readNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'helps in reading a note',
    builder:{
        title:{
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        noteUtils.readNote(argv.title)
    }
})

yargs.parse()
// console.log(chalk.green.bold('Success!'))