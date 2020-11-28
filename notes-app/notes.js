const chalk = require('chalk')
const fs = require('fs')

const getNodes = () => {
    return "your note"
}

const addNoteOld = function(title, body){
    const notes = loadNotes()

    if (notes.filter(function(note){
            return note.title === title
        }).length === 0){
            notes.push({
                title: title,
                body: body
            })
            saveNote(notes)
            console.log('note has been added')
    }
    else{
        console.log('duplicate title')
    }
    
} 
//ES6
const addNote = (title, body) => {
    const notes = loadNotes()
    if (notes.filter((note) => note.title === title).length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log('note has been added')
    }
    else{
        console.log('duplicate title')
    }
}

noteToKeep = []
const removeNoteOld = function(title){
    const notes = loadNotes()
    let noteToKeep = []
    if ((noteToKeep = notes.filter(function(note){
            return note.title != title})).length < notes.length){
        saveNote(noteToKeep)
        console.log('note has been removed')
        console.log(noteToKeep)
    }
    else{
        console.log('note does not exit')
    }  
}

const test = function() {
    console.log(noteToKeep)
}

//ES6
const removeNote = (title) => {
    const notes = loadNotes()
    let noteToKeep = []
    if ((noteToKeep = notes.filter((note) => note.title != title)).length < notes.length){
        saveNote(noteToKeep)
        console.log('note has been removed')
        console.log(noteToKeep)
    }
    else{
        console.log('note does not exit')
    }  
}

const listNotes = () => {
    const notes = loadNotes()
    console.log("your notes: ")
    notes.forEach((note) => {
        console.log(note.title + ": " + note.body)
    });
}

const readNotes = (title) => {
    const notes = loadNotes()
    let noteToRead = {}
    if (noteToRead = notes.find((note) => note.title === title)){
        console.log(noteToRead)
    }
    else{
        console.log("note not found")
    }
}


const saveNote = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}


module.exports = {
    getNodes: getNodes,
    addNote: addNote,
    removeNote: removeNote,
    test: test,
    listNotes: listNotes,
    readNotes: readNotes
}
