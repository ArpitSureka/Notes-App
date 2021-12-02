const fs = require('fs')
const chalk = require('chalk') 
const { timeLog } = require('console')

var addNote = (title, body) => {
    var notes = loadNote1()
    var duplicate = notes.find((note) => note.title == title)
    if(!duplicate){
        notes.push({
            title : title,
            body : body
        })
        saveNote(notes)
        console.log(chalk.green.bold('Note Added'))
    }else{
        console.log(chalk.red.bold('Note title already taken!'))
    }
}

var removeNote = (title) => {
    var notes = loadNote1()
    var duplicates = notes.filter((note) => note.title != title)
    saveNote(duplicates)
    if(notes.length != duplicates.length){
        console.log(chalk.green.bold('Note removed'))
    }else{
        console.log(chalk.red.bold('No Note found'))
    }
}

var readNotes = () =>{
    var notes = loadNote1()
    console.log(chalk.white.bold('Your Notes'))
    for(var note in notes){
        // console.log(note)
        console.log( "   " + notes[note].title + ' : ' + notes[note].body)
    }
}

var readNote = (title) => { 
    var notes = loadNote1()
    var note = notes.find((n) => n.title == title)
    if(note){
        console.log( "   " + note.title + ' : ' + note.body)
    }else{
        console.log(chalk.red.bold('Note not found'))
    }
}

function saveNote(notes) {
    notes = JSON.stringify(notes)
    fs.writeFileSync("notes.JSON",notes)
}

var loadNote1 = () => {
    try{
        var notesfile = fs.readFileSync('notes.json')
        notesfile = notesfile.toString()
        notesfile = JSON.parse(notesfile)

        return notesfile    
    } catch(exception){
        return []
    }
}

module.exports = {
    addN : addNote,
    removeN : removeNote, 
    readNotes : readNotes,
    readNote : readNote
}