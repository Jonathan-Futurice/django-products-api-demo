import React from 'react';
import { Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/Home/HomePage";
import ProductDetailsPage from "./Pages/ProductDetails/ProductDetailsPage";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
