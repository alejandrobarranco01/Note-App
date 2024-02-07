import { Schema, model } from "mongoose";

// Defines a structure for a document with title and description
export interface NoteDocument {
    title: string, // title must be a string
    description?: string // optional description can also be a string
}

// Define the schema for a Note
const noteSchema = new Schema({
    title: {
        type: String, 
        required: true, 
        trim: true // trim white spaces
    },
    description: {
        type: String,
        required: false,
        trim: true
    }
})

// Create a model named "Note" based on the noteSchema
export default model<NoteDocument>("Note", noteSchema);