import React,{useState} from 'react'
import { Heading } from './Heading'


export const Counter = () => {
    let [count,setCount] =useState(0)

    //functions
    function increment(){
            setCount (count+5)
    }
    function decrement(){
            setCount(count-1)
    }
  return (
    <div className=' w-100 bg-secondary m-auto d-flex align-items-center justify-content-center' style={{height:"100vh"}}>
        <div className=' w-25 bg-light  p-5 text-center shadow-sm border ' style={{height:"300px ",}} > 
        <Heading count={count} name="prachi" />
        <button onClick={increment} type='button' className="btn-btn-outline-primary bg-success ms-2">+</button>
        <button onClick={decrement} className="btn-btn-outline-primary bg-primary ms-5  ">-</button>
       
        </div>
    </div>
  )
}
