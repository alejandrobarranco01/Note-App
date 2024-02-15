import React, { ChangeEventHandler, useState, useEffect } from 'react';
import NoteItem from './components/NoteItem';
import axios from 'axios';

type NoteType = {
  id: string;
  title: string;
  description?: string;
};

const App = () => {
  const [values, setValues] = useState({
    title: '',
    description: '',
  });

  const [selectedNoteId, setSelectedNoteId] = useState('');
  const [noteToView, setNoteToView] = useState<NoteType>();
  const [notes, setNotes] = useState<NoteType[]>([]);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await axios.get('http://localhost:8000/note/'); // get all notes
      setNotes(data.notes); // set the notes
    };
    fetchNotes(); // call the function on component mount
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <form
        onSubmit={async (evt) => {
          evt.preventDefault();
          // If a note is selected, update it
          if (selectedNoteId) {
            const { data } = await axios.patch(
              `http://localhost:8000/note/${selectedNoteId}`,
              {
                title: values.title,
                description: values.description,
              },
            );
            // If the update was successful, update the notes in state and clear the form
            if (data.note) {
              const newNotes = notes.map((note) => {
                if (note.id === selectedNoteId) {
                  return data.note;
                }
                return note;
              });
              setNotes(newNotes);
              setValues({ title: '', description: '' });
              setSelectedNoteId('');
            }
          } else {
            const { data } = await axios.post(
              'http://localhost:8000/note/create',
              {
                title: values.title,
                description: values.description,
              },
            );
            if (data.note) {
              setNotes([...notes, data.note]);
              setValues({ title: '', description: '' });
            }
          }
        }}
        className="space-y-6 bg-white shadow-md rounded p-5"
      >
        <h1 className="font-semibold text-2xl text-center">Note Application</h1>
        <div>
          <input
            placeholder="Title"
            type="text"
            className="w-full border-b-2 border-gray-700 outline-none"
            onChange={handleChange}
            value={values.title}
            name="title"
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
            value={values.description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
        <div className="text-right">
          <button className="bg-blue-500 text-white px-5 py-2 rounded">
            Submit
          </button>
        </div>
      </form>

      {/* Note Items */}
      {notes.map((note) => {
        return (
          <NoteItem
            onEditClick={() => {
              setSelectedNoteId(note.id);
              setValues({
                title: note.title,
                description: note.description || '',
              });
            }}
            onDeleteClick={async () => {
              const result = confirm(
                'Are ou sure you want to delete this note?',
              );
              if (!result) return;
              await axios.delete(`http://localhost:8000/note/${note.id}`);
              const newNotes = notes.filter((n) => n.id !== note.id); // filter out the deleted note
              setNotes(newNotes);
            }}
            onViewClick={() => {
              setNoteToView(note);
            }}
            key={note.id}
            title={note.title}
            description={
              noteToView?.id == note.id ? noteToView?.description : ''
            }
          />
        );
      })}
    </div>
  );
};

export default App;
