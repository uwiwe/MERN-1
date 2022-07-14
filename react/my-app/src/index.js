import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Data from "./components/Data";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Data />} />
        <Route path="Form" element={<Form />} />
    </Routes>
  </BrowserRouter>);