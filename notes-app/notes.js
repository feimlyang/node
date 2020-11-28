const fs = require('fs')

const getNodes = function() {
    return "your note"
}

const addNote = function(title, body){
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

noteToKeep = []
const removeNote = function(title){
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
    test: test
}
