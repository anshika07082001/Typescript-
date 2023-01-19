import React, { useState } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import PlaceOrder from './components/PlaceOrder';
import UseCheck from './components/UseCheck';
import {prodData,customerData,settingsData} from './type'

function App() {
  var [products,setProducts]=useState<prodData[]>([])
  var [customerData,setCustomerData]=useState<customerData[]>([])
  var [settings,setSettings]=useState<settingsData|null>(null)

  // custom hook named as UseCheck
  var custom = UseCheck(products,customerData,settings)

  return (
  <div className="col-12 d-flex flex-column">
    <AddProduct products={products} setProducts={setProducts} settings={settings} setSettings={setSettings}/>
    {products.length>0?
    <PlaceOrder products={products} customerData={customerData} setCustomerData={setCustomerData} />
    :<></>}
  </div>
  );
}

export default App;
