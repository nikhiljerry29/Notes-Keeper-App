import React from "react";
import Note from "./Note";
import notes from "../data/notes";

function Notes() {
   return (
      <main className='container'>
         <section className='notes__section'>
            {notes.map((note) => (
               <Note title={note.title} content={note.content} />
            ))}
         </section>
      </main>
   );
}

export default Notes;
