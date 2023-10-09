import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Vans from './components/pages/Vans';
import VanDetails from './components/pages/VanDetails';
import Layout from './components/Layout';
import Dashboard from './components/pages/Host/Dashboard';
import Income from './components/pages/Host/Income';
import Review from './components/pages/Host/Review';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/host' element={<Dashboard />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetails />} />
          <Route path='/host/income' element={<Income />} />
          <Route path='/host/reivew' element={<Review />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
