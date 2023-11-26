import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stats from './pages/stats';
import Index from './pages/index';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;