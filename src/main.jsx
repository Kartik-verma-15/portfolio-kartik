
import { StrictMode, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import App, { MavicNavigation } from './App.jsx';
import InstagramCarousel from './Components';
import Navbar from './Navbar';
import GlitchReveal from './Glyphtext';
import Herosection from './Herosection';

function Experiments() {
  return (
    <Fragment>
      <MavicNavigation />
      <InstagramCarousel />
      <Navbar />
      <GlitchReveal />
      <Herosection />
    </Fragment>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/experiments" element={<Experiments />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
