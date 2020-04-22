import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import OrderForm from './components/OrderForm';
import About from './components/About';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route path="/product-details" component={ProductDetails} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/order-form" component={OrderForm} />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#32b8b4" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,69.3C640,85,800,139,960,154.7C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
    </div>
  );
}

export default App;