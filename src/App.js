import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
   return (
      <div className='main__content'>
         <div>
            <Header />
            <Notes />
         </div>

         <Footer />
      </div>
   );
}

export default App;
