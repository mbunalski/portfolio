import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigationbar from "./components/Navigationbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import ShortUrl from './components/ShortUrl.jsx';

// function App() {
//   return (
//     <div>
//       <Navigationbar />
//       <Home />
//       <About />
//       <Skills />
//       <Work />
//       <Contact />
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          
            <Routes>
             <Route path="/" element={<><Navigationbar /><Home /><About /><Skills /><Work /><Contact /></>}/>
             <Route path="/url" element={<><Navigationbar /><ShortUrl /></>}/>
             <Route path="/contact" element={<Contact />}/>
            <Route component={Error}/>
           </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
