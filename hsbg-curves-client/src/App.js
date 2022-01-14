import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Views/LandingPage/LandingPage';
import Hero from './Views/Hero/Hero';
import './App.cssmodule.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/hero/:id/:heroName" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
