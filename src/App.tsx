import React, { useState } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import AddSettings from './components/AddSettings';
import PlaceOrder from './components/PlaceOrder';
import {data} from './type'

function App() {
  var [products,setProducts]=useState<data[]>([])
  console.log(products)
  return (
    <div className="col-12 d-flex flex-column">
      <AddProduct products={products} setProducts={setProducts}/>
      {products.length>0?
      <PlaceOrder products={products}/>
      :<></>}
      <AddSettings/>
    </div>
  );
}

export default App;
