import React from "react";
import "./Note.css";
import PropTypes from "prop-types";

function Note({ title, content }) {
   return (
      <div className='note note--light'>
         <div className='note__title'>{title}</div>
         <div className='note__content'>{content}</div>
      </div>
   );
}

Note.propTypes = {
   title: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
};

export default Note;
