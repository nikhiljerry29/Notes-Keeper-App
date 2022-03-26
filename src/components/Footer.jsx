import React, { useState } from "react";

function Footer() {
   const date = new Date();
   const currentYear = date.getFullYear();
   const [currentTime, setCurrentTime] = useState(date.toLocaleTimeString());

   setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
   }, 1000);

   return (
      <footer>
         <div className='footer__content'>
            <p>Copyright &copy; {currentYear}</p>
            <p>{currentTime}</p>
         </div>
      </footer>
   );
}

export default Footer;
