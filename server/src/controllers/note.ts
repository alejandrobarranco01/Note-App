import { RequestHandler } from 'express';
import Note, { NoteDocument } from '../models/note';

export interface IncomingBody {
  title: string;
  description?: string;
}

// Create a note
export const createNote: RequestHandler = async (req, res) => {
  if (!req.body.title)
    return res.status(400).json({ message: 'Title is required' });
  const newNote = await Note.create<NoteDocument>({
    title: (req.body as IncomingBody).title,
    description: (req.body as IncomingBody).description,
  });
  res.json({
    note: {
      id: newNote._id,
      title: newNote.title,
      description: newNote.description,
    },
  }); // Return the note, along with its id, title, and description
};

// Update a note
export const updateNote: RequestHandler = async (req, res) => {
  const { noteId } = req.params;
  const { title, description } = req.body as IncomingBody;
  const note = await Note.findByIdAndUpdate(
    noteId, // the id of the note to update
    { title, description }, // the properties to update
    { new: true },
  ); // return the updated document

  if (!note) return res.status(404).json({ message: 'Note not found' }); // 404 Not Found

  await note.save();

  res.json({
    note: { id: note._id, title: note.title, description: note.description },
  }); // 200 OK
};

// Delete a note
export const deleteNote: RequestHandler = async (req, res) => {
  const { noteId } = req.params; // the id of the note to delete
  if (!(await Note.findById(noteId)))
    return res.status(404).json({ message: 'Note not found' }); // 404 Not Found
  const removedNote = await Note.findByIdAndDelete(noteId); // see if note was removed
  if (!removedNote)
    return res.status(500).json({ message: 'Note could not be removed' }); // if note not removed, return 500 Internal Server Error
  res.json({ message: 'Note deleted' }); // 200 OK
};

// Get all notes
export const getNotes: RequestHandler = async (req, res) => {
  const notes = await Note.find(); // find all notes

  res.status(200).json({
    notes: notes.map((note) => ({
      id: note._id,
      title: note.title,
      description: note.description,
    })),
  }); // 200 OK with the notes in the body
};

// Get a note
export const getNote: RequestHandler = async (req, res) => {
  const { noteId } = req.params; // the id of the note to get
  const note = await Note.findById(noteId); // find the note by id
  if (!note) return res.status(404).json({ message: 'Note not found' }); // 404 Not Found
  res.status(200).json({ note }); // 200 OK
};
