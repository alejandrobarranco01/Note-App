import React, { ChangeEventHandler, useState } from 'react';
import NoteItem from './components/NoteItem';
import axios from 'axios';

const App = () => {
  const [values, setValues] = useState({
    title: '',
    description: '',
  });

  const [notes, setNotes] = useState<
    {
      id: string;
      title: string;
      description?: string;
    }[]
  >([]);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <form
        onSubmit={async (evt) => {
          evt.preventDefault();
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
        return <NoteItem key={note.title} title={note.title} />;
      })}
    </div>
  );
};

export default App;
