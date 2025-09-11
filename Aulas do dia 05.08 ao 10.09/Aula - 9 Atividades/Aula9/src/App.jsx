import { useState } from 'react';
import './App.css';
import { DigitalClocks } from './components/digitalclock';
import { Timepiece } from './components/Timeopiece';
import { Button } from './components/Button';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Title } from './components/Title';
import { TitlesPage } from './components/Title';
import { BlinkBlink } from './components/BlinkBlink';

function App() {
  const [titles, setTitles] = useState([]); // guarda todos os títulos

  const addTitle = (newTitle) => {
    if (newTitle.trim() !== "") setTitles([...titles, newTitle]);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">| Home |</Link>
        <Link to="/title"> Title |</Link>
        <Link to="/clock"> Clock |</Link>
        <Link to="/timer"> Timer |</Link>
        <Link to="/count"> Count |</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div className='home'>
          <h1>Bem Vindo</h1>
          <BlinkBlink/>
          </div>} />
        <Route path="/title" element={<div className="title">
        <TitlesPage titles={titles} />
        <Title addTitle={addTitle} />
    </div>}/>

        <Route path="/clock" element={<div className="clock"><DigitalClocks /></div>} />
        <Route path="/timer" element={<div className="Timer"><Timepiece /></div>} />
        <Route path="/count" element={<div><Button /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
