import React, { useState } from 'react';
import './index.css';
import {BrowserRouter, Routes,  Route} from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';

import NavBar from "./components/NavBar/NavBar";
import Home from './Pages/Home';
import Gotop from './components/Gotop/Gotop';
import TransitionEffect from './components/TransitionEffect/TransitionEffect';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer';
import Apropos from './Pages/Apropos';
import Contact from './components/Contact/Contact';
import EnseignementPage from './Pages/EnseignementPage';
import Enseignements from './Pages/Enseigements';

const App = () => {
  
  const [theme, setTheme] = useState(0);
  const handleTheme = () => {
    setTheme( (theme)? 0 : 1);
  }

  return (
    <div className={(theme)? "app theme" : "app"}>
      <BrowserRouter> 
            <TransitionEffect />
            <NavBar themeFunction={handleTheme} themeState={theme} />
            
            <AnimatePresence mode='wait'>
              <Routes>
                <Route path='' element={<Home />} />
                <Route path='apropos' element={<Apropos />} />
                <Route path='contacts' element={<Contact />} />
                <Route path='enseignements' element={<Enseignements />} />
                <Route path="/enseignement/:id" element={<EnseignementPage />} />
                <Route path='*'  element={<Home />} />
              </Routes>
            </AnimatePresence>

            <Footer />

            <ScrollToTop />
            <Gotop />
      </BrowserRouter>
    </div>
  )
}

export default App;