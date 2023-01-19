import React, { useRef } from 'react'
import {prodData,customerData} from '../type'

type placeOrderprops={
    products:prodData[]
    customerData:customerData[]
    setCustomerData:React.Dispatch<React.SetStateAction<customerData[]>>
}

const PlaceOrder = (props:placeOrderprops) => {
    var name = useRef<HTMLInputElement>(null)
    var address = useRef<HTMLTextAreaElement>(null)
    var zip = useRef<HTMLInputElement>(null)
    var sel = useRef<HTMLSelectElement>(null)
    var quant = useRef<HTMLInputElement>(null)

    // function adds the ordered data to list
    const placeOrder=(e:React.SyntheticEvent)=>{
        e.preventDefault()
        if(name.current!==null && address.current!==null && zip.current!==null && sel.current!==null && quant.current!==null){
            if(name.current.value!=='' && address.current.value!=='' && sel.current.value!==null && quant.current.value!==''){
                var obj ={name:name.current.value,address:address.current.value,zip:zip.current.value,selProd:sel.current.value,quant:quant.current.value}
                props.customerData.push(obj)
                props.setCustomerData([...props.customerData])
                name.current.value=''
                address.current.value=''
                zip.current.value=''
                quant.current.value=''
            }
            else{
                alert('Fill all details')
            }
        }
    }

  return (
    <div className='col-10 m-auto d-flex flex-column mt-4'>
        <h3 className='text-center'>Place Order</h3>
        <div className='col-6 d-flex flex-column m-auto text-center border-dark border rounded p-3'>
            <form onSubmit={(e)=>placeOrder(e)}>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Customer Name </label>
                    <input placeholder='Enter Customer Name...' className='p-2' ref={name} type='text'/>
                </div>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Customer Address </label>
                    <textarea placeholder='Enter Customer Address... ' className='p-4' ref={address}/>
                </div>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>ZipCode </label>
                    <input placeholder='Enter Zipcode...' className='p-2' type='number' ref={zip}/>
                </div>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Select Products to order</label>
                    <select className='p-2 col-6' ref={sel}>
                        {props.products.map((item)=>{
                            return(
                                <option>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Quantity </label>
                    <input placeholder='Enter Quantity...' className='p-2' type='number' ref={quant}/>
                </div>
                <button className='col-3 border-0 rounded text-white bg-warning fw-bold m-2 p-2' type='submit'>Place Order</button>
            </form>
        </div>
        {props.customerData.length>0?
         <div className='m-auto mt-4 col-12'>
            <h3 className='text-center'>Customers Orders</h3>
            <table className='col-12'>
                <tr>
                    <td className='fw-bold text-center border border-dark p-2 bg-warning'>S No.</td>
                    <td className='fw-bold text-center border border-dark p-2 bg-warning'>Customer Name</td>
                    <td className='fw-bold text-center border border-dark p-2 bg-warning'>Customer Address</td>
                    <td className='fw-bold text-center border border-dark p-2 bg-warning'>Zipcode</td>
                    <td className='fw-bold text-center border border-dark p-2 bg-warning'>Product</td>
                    <td className='fw-bold text-center border border-dark p-2 bg-warning'>Quantity</td>
                </tr>
                {props.customerData.map((item,i)=>{
                    return(
                    <tr>
                        <td className='fw-bold text-center border border-dark p-2'>{i+1}</td>
                        <td className='fw-bold text-center border border-dark p-2'>{item.name}</td>
                        <td className='fw-bold text-center border border-dark p-2'>{item.address}</td>
                        <td className='fw-bold text-center border border-dark p-2'>{item.zip}</td>
                        <td className='fw-bold text-center border border-dark p-2'>{item.selProd}</td>
                        <td className='fw-bold text-center border border-dark p-2'>{item.quant}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
        :<></>}
    </div>
  )
}

export default PlaceOrder