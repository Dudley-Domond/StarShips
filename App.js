import './App.css'
//import React from 'react';
import DataFetching from './components/DataFetching';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() { 

  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
       <Route path='contact' element={<Contact />} />
      </Routes>
      <DataFetching />
    </div>
    </BrowserRouter>
  );
}

export default App;
