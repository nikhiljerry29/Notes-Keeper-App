import React, { useState } from "react";
import Note from "./Note";
import initialNotes from "../data/notes";

function Notes() {
   const [notes, setNotes] = useState(initialNotes);
   const [note, setNote] = useState({
      title: "",
      content: "",
   });

   const handleSubmit = (event) => {
      event.preventDefault();
      if ((note.title !== "") & (note.content !== "")) {
         notes.push(note);
         setNote({ title: "", content: "" });
      }
   };

   const handleChange = (event) => {
      const { name, value } = event.target;

      setNote((prev) => {
         return {
            ...prev,
            [name]: value,
         };
      });
   };

   const deleteNote = (id) => {
      console.log("hajdhad");
      setNotes((prev) => {
         return prev.filter((note, index) => {
            return index !== id;
         });
      });
   };

   return (
      <main className='container'>
         <section className='notes__input'>
            <form onSubmit={handleSubmit}>
               <input
                  type='text'
                  name='title'
                  value={note.title}
                  onChange={handleChange}
                  placeholder='Note Title'
               />
               <input
                  type='textarea'
                  name='content'
                  value={note.content}
                  onChange={handleChange}
                  placeholder='Take a note here....'
               />
               <button type='submit'>Add</button>
            </form>
         </section>

         <section className='notes__display'>
            {notes.length > 0 ? (
               notes.map((note, index) => (
                  <Note
                     key={index}
                     id={index}
                     title={note.title}
                     content={note.content}
                     handleDelete={deleteNote}
                  />
               ))
            ) : (
               <div>Nothing down here!</div>
            )}
         </section>
      </main>
   );
}

export default Notes;
