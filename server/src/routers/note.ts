import { Router } from "express";
import { createNote, updateNote, deleteNote, getNotes, getNote } from "../controllers/note";

const router = Router();

router.post('/create', createNote)

router.patch('/:noteId', updateNote);

router.delete('/:noteId', deleteNote);

router.get('/', getNotes); 

router.get('/:noteId', getNote);

export default router;