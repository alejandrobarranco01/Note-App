import express from 'express'
import './db' // import db
import Note, { NoteDocument } from './models/note' // import model
import note from './models/note'
import { createNote, updateNote, deleteNote, getNotes, getNote } from './controllers/note'

// Defines a structure with a required title property of type string an optional description property of type string
export interface IncomingBody {
    title: string
    description?: string
}

const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: false})) // for parsing application/x-www-form-urlencoded

app.listen(8000, () => {
    console.log('Server running on port 8000')
})


app.post('/', (req, res) => {
    console.log(req.body)
    res.json({message:"I am the server!"})
})

app.post('/create', createNote)

app.patch('/:noteId', updateNote);

app.delete('/:noteId', deleteNote);

app.get('/', getNotes); 

app.get('/:noteId', getNote);