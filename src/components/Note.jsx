import React from "react";
import "./Note.css";
import PropTypes from "prop-types";

function Note({ id, title, content, handleDelete }) {
   return (
      <div className='note note--light'>
         <div>
            <div className='note__title'>{title}</div>
            <div className='note__content'>{content}</div>
         </div>
         <button
            type='button'
            className='btn btn--danger'
            onClick={() => {
               handleDelete(id);
            }}
         >
            Delete
         </button>
      </div>
   );
}

Note.propTypes = {
   title: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
};

export default Note;
