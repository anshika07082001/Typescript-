import React from 'react'
type obj ={
    id:number,
    name:string
}

type marksProps={
    marks:number[]
    books:obj[]
    getEmail:()=>void
    inpRef:React.RefObject<HTMLInputElement>
    email:string
}

const Marks = (props:marksProps) => {
  return (
    <div className='col-4 m-auto text-center d-flex flex-column mt-2 border rounded border-dark p-3'>
        <h3>Marks Component</h3>
        <label>Marks Obtained in subjects are:[{props.marks.map((item)=>{
            return (
            <span>{item},</span>
            )
        })}]
        </label>
        {props.books.map((item)=>{
            return (
                <label>{item.id}: {item.name}</label>
            )
        })}
        <h4>Print Your Email</h4>
        <input placeholder='Enter Your Email Here...' ref={props.inpRef} type='text'/>
        <button className='col-3 m-auto mt-1' onClick={props.getEmail}>Print</button>
        {props.email!==''?
        <span>Your email is: {props.email}</span>:<></>}
    </div>
  )
}

export default Marks