import React from 'react'
import Main from './Pages/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/poppins";
import './App.css'
import Headboy from './Pages/Headboy';
import Headgirl from './Pages/Headgirl';
import DepHeadboy from './Pages/DepHeadboy';
import DepHeadgirl from './Pages/DepHeadgirl';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/headboy" element={<Headboy />} />
          <Route path="/headgirl" element={<Headgirl />} />
          <Route path="/depheadboy" element={<DepHeadboy />} />
          <Route path="/depheadgirl" element={<DepHeadgirl />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
