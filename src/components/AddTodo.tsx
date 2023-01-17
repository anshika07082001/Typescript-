import React from 'react'
type obj = {
    task:string
}

type addTodoProps ={
    inpRef:React.RefObject<HTMLInputElement>
    addTask:()=>void
    arr:obj[]
    setArr:React.Dispatch<React.SetStateAction<obj[]>>
}

const AddTodo = (props:addTodoProps) => {
    console.log('todo component')

  return (
    <div className='col-6 text-center border p-2 m-auto mt-3 rounded'>
        <h3>Todo Component</h3>
        <h5>Add New Task</h5>
        <div>
            <input placeholder='Enter New Task...' ref={props.inpRef}/>
            <button onClick={props.addTask}>Add</button>
        </div>
        {props.arr.length>0?
        <table className='border m-auto border-dark mt-3'>
            <tr className='border-dark border'>
                <th className='border-dark border'>S.No</th>
                <th className='border-dark border'>Task Todo</th></tr>
        {props.arr.map((item,i)=>{
            return(
                <tr className='border-dark border'>
                    <td className='border-dark border'>{i+1}</td>
                    <td className='border-dark border'> {item.task}</td></tr>
            )
        })}</table>:<></>}
    </div>
  )
}

export default AddTodo