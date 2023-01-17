import React from 'react'

type studentProps={
    name:string
    age:number
    qualified:boolean
    gender:'male'|'female'
}

const Student = (props:studentProps) => {
  return (
    <div className='col-4 m-auto text-center d-flex flex-column mt-2 border rounded border-dark p-3'>
        <h3>Student Component</h3>
        <label>Name: {props.name}</label>
        <label>Qualified Status: {props.qualified?<label>True</label>:<label>False</label>}</label>
        <label>Gender is: {props.gender}</label>
    </div>
  )
}

export default Student