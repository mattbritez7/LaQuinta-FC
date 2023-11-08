import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stats from './pages/Stats';
import Index from './pages/index';

function App() {
  return (
    <BrowserRouter basename="/LaQuinta-FC">

     <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/stats" element={<Stats />} />
      </Routes>
 
    </BrowserRouter>
  );
}

export default App;