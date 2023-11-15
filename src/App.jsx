import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stats from './pages/stats';
import Index from './pages/index';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;