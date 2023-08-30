import React, {Component, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Navigationbar from "./components/Navigationbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import ShortUrl from './components/ShortUrl.jsx';
import Academic from './components/Academic.jsx';

import { db } from "./utils/firebase";
import { getDatabase, ref, set, child, get  } from "firebase/database";
import NavBar from './components/NavBar.jsx';

// function App() {
// return (
//     <div>
//       <Navigationbar />
//       <Home />
//       <About />
//       <Skills />
//       <Work />
//       <Contact />
//     </div>
// );
// }

const dbRef = ref(getDatabase());

const check = () => {
    var dict = {}
    get(child(dbRef, `urlapp`)).then((snapshot) => {
        if (snapshot.exists()) {
            
            snapshot.forEach((child) => {
                dict[child.key] = child.val();
                
            }); 
            // console.log('l1')
            // console.log(dict)
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    }).then(() => {
        
        // dict[[short]] = long;
        let urlstring = window.location.href
        // index = urlstring.lastIndexOf('/') + 1
        let shorturl = urlstring.substring(urlstring.lastIndexOf('/') + 1)
        console.log(dict[shorturl])
        console.log(typeof(window.location.href))
        console.log(shorturl)
        // console.log(dict)
        
        if (shorturl in dict){
            console.log('wammy123')
            console.log(dict[shorturl])
            window.location.assign(dict[shorturl])
            
            return true
        }
    });
    
    
    
}



const DoSomethingWrapper = ({}) => {
    
    if (check()){

    }else{
        return <><Navigationbar/><ShortUrl/></>
    }
      
    ;
    
  };

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>

                    <Routes>
                        <Route path="/"
                            element={
                                <><Navigationbar/><Home/><About/><Academic/><Skills/><Work/><Contact/></>
                            }/>
                        <Route path="/url"
                            element={
                                <><NavBar/><ShortUrl/></>
                            }/>
                        <Route path="/contact"
                            element={<Contact/>}/>
                        <Route path="/url*"  element={(
                            <DoSomethingWrapper>
                                
                            </DoSomethingWrapper>
                        )} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
