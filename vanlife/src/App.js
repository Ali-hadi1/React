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
import HostLayout from './components/HostLayout';
import HostVans from './components/pages/Host/HostVans';
import HostVanDetails from './components/pages/Host/HostVanDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />

          <Route path='/host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='review' element={<Review />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetails />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
