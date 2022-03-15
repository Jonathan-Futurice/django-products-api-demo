import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/Home/HomePage';
import ProductDetailsPage from './Pages/ProductDetails/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
