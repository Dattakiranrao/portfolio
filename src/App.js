import './App.scss';
import {React, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Skills } from './components/Skills/Skills';
import { Work } from './components/Work/Work';
import { ThemeState } from './components/ThemeContext/ThemeContext';


function App() {
  const [mode, setMode] = useState('light');
  const get = (value) =>{
    setMode(value)
  }

  return (
    <>
      <ThemeState>
        <Routes>
          <Route path='/' element={<Layout get={get} />}>
            <Route index element={<Home mode={mode}/>} />
            <Route path='/about' element={<About mode={mode} />} />
            <Route path='/contact' element={<Contact mode={mode} />} />
            <Route path='/skills' element={<Skills mode={mode} />} />
            <Route path='/work' element={<Work mode={mode}/>} />
          </Route>
        </Routes>
      </ThemeState>
    </>
  );
}

export default App;
