import React, { useRef, useState } from 'react';
import './App.css';
import Marks from './components/Marks';
import Student from './components/Student';

function App() {
  const marks=[23,34,56,34,56]
  const books = [
    {id:1,name:'Let Us C'},
    {id:2,name:'Coding Interview'},
    {id:3,name:'Full Stack Devloper'},
    {id:4,name:'Learning Algorithms'},
    {id:5,name:'Data Structures'}
  ]
  var inpRef = useRef<HTMLInputElement>(null)
  var [email,setEmail]=useState('')

  const getEmail=()=>{
    if(inpRef.current!==null){
      email = inpRef.current.value
      setEmail(email)
      inpRef.current.value=''
    }
  }

  return (
    <div className="col-12">
      <Student name='Anshika' age={10} qualified={true} gender='female'/>
      <Marks marks={marks} books={books} getEmail={getEmail} inpRef={inpRef} email={email}/>
    </div>
  );
}

export default App;
