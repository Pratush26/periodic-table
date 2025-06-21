// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Table from './pages/Table';
import Details from './pages/Details'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
          <Route path="/about" element={<About />} />
          <Route path='/details/:sign' element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;