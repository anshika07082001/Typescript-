import React, { useRef } from 'react'
import {data} from '../type'

type addproductProps={
    products:data[]
    setProducts:React.Dispatch<React.SetStateAction<data[]>>
}

const AddProduct = (props:addproductProps) => {
    var nameRef = useRef<HTMLInputElement>(null)
    var disRef = useRef<HTMLTextAreaElement>(null)
    var priceRef = useRef<HTMLInputElement>(null)
    var tagRef = useRef<HTMLInputElement>(null)
    var stockRef = useRef<HTMLInputElement>(null)
    const submitForm =(e:React.SyntheticEvent)=>{
        e.preventDefault()
        if(nameRef.current!==null && disRef.current!==null && priceRef.current!==null && tagRef.current!==null && stockRef.current!==null){
            var obj ={name:nameRef.current.value,discription:disRef.current.value,price:priceRef.current.value,tag:tagRef.current.value,stock:stockRef.current.value}
            props.products.push(obj)
            props.setProducts([...props.products])
            nameRef.current.value=''
            disRef.current.value=''
            priceRef.current.value=''
            tagRef.current.value=''
            stockRef.current.value=''
        }
    }

  return (
    <div className='col-10 m-auto d-flex flex-column'>
        <h3 className='text-center'>Add Products</h3>
        <div className='col-6 d-flex flex-column m-auto text-center border-dark border rounded p-3'>
            <form onSubmit={(e)=>submitForm(e)}>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Product Name </label>
                    <input placeholder='Enter Product Name...' className='p-2' ref={nameRef}/>
                </div>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Description</label>
                    <textarea placeholder='Enter Product Description... ' className='p-4' ref={disRef}></textarea>
                </div>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Product Price </label>
                    <input placeholder='Enter Product Price...' className='p-2' ref={priceRef}/>
                </div>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Product Tags</label>
                    <input placeholder='Enter Product Tags...' className='p-2' ref={tagRef}/>
                </div>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Product Stock </label>
                    <input placeholder='Enter Product Stock...' className='p-2' type='number' ref={stockRef}/>
                </div>
                <button className='col-3 border-0 rounded text-white bg-warning fw-bold m-2 p-2' type='submit'>Add Product</button>
            </form>
            {props.products.length>0?
            <div className='m-auto mt-4'>
                <h3>Products list</h3>
                <table>
                    <tr>
                        <td className='fw-bold text-center border border-dark p-2'>S No.</td>
                        <td className='fw-bold text-center border border-dark p-2'>Product Name</td>
                        <td className='fw-bold text-center border border-dark p-2'>Products Price</td>
                        <td className='fw-bold text-center border border-dark p-2'>Product Tag</td>
                        <td className='fw-bold text-center border border-dark p-2'>Stock</td>
                    </tr>
                    {props.products.map((item,i)=>{
                        return(
                            <tr>
                                <td className='fw-bold text-center border border-dark p-2'>{i+1}</td>
                                <td className='fw-bold text-center border border-dark p-2'>{item.name}</td>
                                <td className='fw-bold text-center border border-dark p-2'>{item.price}</td>
                                <td className='fw-bold text-center border border-dark p-2'>{item.tag}</td>
                                <td className='fw-bold text-center border border-dark p-2'>{item.stock}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            :<></>}
        </div>
    </div>
  )
}

export default AddProduct