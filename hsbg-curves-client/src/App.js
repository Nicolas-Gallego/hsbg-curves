import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Views/LandingPage/LandingPage';
import './App.cssmodule.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
