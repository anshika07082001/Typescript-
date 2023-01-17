import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Counter from './components/Counter';

type obj = {
  task:string
}

function App() {
  var inpRef = useRef<HTMLInputElement>(null)
  var [arr,setArr]=useState<obj[]>([])
  
  const addTask=useCallback(()=>{
    if(inpRef.current!==null){
      var obj ={task:inpRef.current.value}
      arr.push(obj)
      setArr([...arr])
      inpRef.current.value=''
    }
  },[arr]);
  console.log('app component')
  return (
    <div className="col-12">
      <Counter/>
      <AddTodo inpRef={inpRef} addTask={addTask} arr={arr} setArr={setArr}/>
    </div>
  );
}

export default App;
