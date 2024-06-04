import React, { useState } from "react";
import "./Accordion.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Faq from "./pages/faq/Faq";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
