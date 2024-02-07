import { RequestHandler } from 'express';
import { IncomingBody } from '..';
import Note, { NoteDocument } from '../models/note';

// Create a note
export const createNote: RequestHandler  = async (req, res) => {
    await Note.create<NoteDocument>({
        title: (req.body as IncomingBody).title, 
        description: (req.body as IncomingBody).description
    })
    res.json({message:"Saved!"})
};

// Update a note
export const updateNote: RequestHandler = async (req, res) => {
    const {noteId} = req.params;    
    const {title, description} = req.body as IncomingBody;
    const note = await  Note.findByIdAndUpdate(
        noteId, // the id of the note to update
        {title, description}, // the properties to update
        {new: true}); // return the updated document

    if(!note) return res.status(404).json({message: "Note not found"}) // 404 Not Found 
    
    await note.save();

    res.json({note}); // 200 OK
}

// Delete a note
export const deleteNote: RequestHandler = async (req, res) => {
    const {noteId} = req.params; // the id of the note to delete
    if (!(await Note.findById(noteId))) return res.status(404).json({message: "Note not found"}); // 404 Not Found
    const removedNote = await Note.findByIdAndDelete(noteId); // see if note was removed
    if (!removedNote) return res.status(500).json({message: "Note could not be removed"}) // if note not removed, return 500 Internal Server Error
    res.json({message: "Note deleted"}); // 200 OK
}

// Get all notes
export const getNotes: RequestHandler = async (req, res) => {
    const notes = await Note.find(); // find all notes
    res.status(200).json({notes}); // 200 OK
}

// Get a note
export const getNote: RequestHandler = async (req, res) => {
    const {noteId} = req.params; // the id of the note to get
    const note = await Note.findById(noteId); // find the note by id
    if (!note) return res.status(404).json({message: "Note not found"}); // 404 Not Found
    res.status(200).json({note}); // 200 OK
}