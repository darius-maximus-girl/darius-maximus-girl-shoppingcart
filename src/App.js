import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ProductsList></ProductsList>
      <ProductDetails></ProductDetails>
      <ShoppingCart></ShoppingCart>
      <PageNotFound></PageNotFound>
    </div>
  );
}

export default App;
