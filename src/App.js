import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Product from './Pages/Product';
import Home from './Pages/Home';
import ProductList from './Pages/productList';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';



function App() {
  return (
    <div className="App">
      <Home/>

      <ProductList/> 
      <Product/>
      <Register/>
      <Login/>
      <Cart/>
    </div>
  );
}

export default App;
