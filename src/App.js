import React from 'react';
import Index from './components/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import WhatWD from './components/WhatWD';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/what-we-do" element={<WhatWD />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;