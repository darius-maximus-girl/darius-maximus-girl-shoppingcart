import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route path="/product-details" component={ProductDetails} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;