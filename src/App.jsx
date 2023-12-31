import React, { useState } from 'react';
import './index.css';
import {BrowserRouter, Routes,  Route} from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';

import NavBar from "./components/NavBar/NavBar";
import Home from './Pages/Home';
import Gotop from './components/Gotop/Gotop';
import Error404 from './components/ErrorPage/Error';
import TransitionEffect from './components/TransitionEffect/TransitionEffect';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer';

const App = () => {
  
  // Mode sombre settings for all app
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
                <Route path='*' element={<Error404 />} />
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