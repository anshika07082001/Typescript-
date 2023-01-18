import React from 'react'
import {data} from '../type'

type placeOrderprops={
    products:data[]
}

const PlaceOrder = (props:placeOrderprops) => {
  return (

    <div className='col-10 m-auto d-flex flex-column mt-4'>
        <h3 className='text-center'>Place Order</h3>
        <div className='col-6 d-flex flex-column m-auto text-center border-dark border rounded p-3'>
            <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                <label>Customer Name </label>
                <input placeholder='Enter Customer Name...' className='p-2'/>
            </div>
            <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                <label>Customer Address </label>
                <textarea placeholder='Enter Customer Address... ' className='p-4'/>
            </div>
            <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                <label>ZipCode </label>
                <input placeholder='Enter Zipcode...' className='p-2' type='number'/>
            </div>
            <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                <label>Select Products to order</label>
                <select className='p-2 col-6'>
                    <option>Select product</option>
                    {props.products.map((item)=>{
                        return(
                            <option>{item.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                <label>Quantity </label>
                <input placeholder='Enter Quantity...' className='p-2' type='number'/>
            </div>
            <button className='col-3 border-0 rounded text-white bg-warning fw-bold m-2 p-2'>Place Order</button>
        </div>
    </div>
  )
}

export default PlaceOrder