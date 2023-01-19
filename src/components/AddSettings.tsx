import React, { useRef } from 'react'
import {settingsData} from '../type'

type addSettingsProps = {
    settings:settingsData|null
    setSettings:React.Dispatch<React.SetStateAction<settingsData|null>>
}

const AddSettings = (props:addSettingsProps) => {
    
    var selRef = useRef<HTMLSelectElement>(null)
    var defPrice = useRef<HTMLInputElement>(null)
    var defStock = useRef<HTMLInputElement>(null)
    var defZip = useRef<HTMLInputElement>(null)
    
    // function adds the setting lists data

    const setting =(e:React.SyntheticEvent)=>{
        e.preventDefault()
        if(selRef.current!==null && defPrice.current!==null && defStock.current!==null && defZip.current!==null){
            if(selRef.current.value!=='' && defPrice.current.value!=='' && defStock.current.value!=='' && defZip.current.value!==''){
                var obj = {selRef:selRef.current.value,defPrice:defPrice.current.value,defStock:defStock.current.value,defZip:defZip.current.value}
                props.setSettings(obj)
                defPrice.current.value=''
                defStock.current.value=''
                defZip.current.value=''
            }
            else{
                alert('Fill All details')
            }
        }
    }
    
  return (
    <div className='col-5 d-flex flex-column mt-4'>
        <div className='col-12 d-flex flex-column m-auto align-items-start text-center border-dark border rounded p-3'>
            <h3 className='text-center m-auto'>Default Settings</h3>
            <form onSubmit={(e)=>setting(e)} className='m-auto'>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Title</label>
                    <select ref={selRef}>
                        <option>With Tag</option>
                        <option>Without Tag</option>
                    </select>
                </div>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Default ZipCode </label>
                    <input placeholder='Enter Zipcode...' className='p-2' type='number' ref={defZip}/>
                </div>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Default Price </label>
                    <input placeholder='Enter Quantity...' className='p-2' type='number' ref={defPrice}/>
                </div>
                <div className='col-12 p-2 d-flex align-items-center justify-content-between'>
                    <label>Default Stock </label>
                    <input placeholder='Enter Quantity...' className='p-2' type='number' ref={defStock}/>
                </div>
                <button className='col-6 border-0 rounded text-white bg-warning fw-bold m-auto p-2' type='submit'>Default Settings</button>
            </form>
            {props.settings!==null?
         <div className='m-auto mt-4 col-12'>
            <h3 className='text-center'>Default Settings Data</h3>
            <table className='col-12'>
                <tr>
                    <td className='fw-bold text-center border border-dark p-2 bg-warning'>Title</td>
                    <td className='fw-bold text-center border border-dark p-2 bg-warning'>Default price</td>
                    <td className='fw-bold text-center border border-dark p-2 bg-warning'>Default Stock</td>
                    <td className='fw-bold text-center border border-dark p-2 bg-warning'>Default Zipcode</td>
                </tr>
                <tr>
                    <td className='fw-bold text-center border border-dark p-2'>{props.settings.selRef}</td>
                    <td className='fw-bold text-center border border-dark p-2'>{props.settings.defPrice}</td>
                    <td className='fw-bold text-center border border-dark p-2'>{props.settings.defStock}</td>
                    <td className='fw-bold text-center border border-dark p-2'>{props.settings.defZip}</td>
                </tr>
            </table>
        </div>
        :<></>}
        </div>
    </div>
  )
}

export default AddSettings