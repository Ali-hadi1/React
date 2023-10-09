import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Vans from './components/pages/Vans';


function App() {
  return (
    <Router>
      <header>
        <Link to="/">#VANLIFE</Link>
        <nav>
          <Link to="/vans">Vans</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </Router>
  );
}

export default App;
