import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,reset,decrement,incrementByAmount } from '../coumponunts/counterSlice'


function Counter() {

  const [amount,setAmount] = useState(" ")
  const dispatch=useDispatch()
 const count = useSelector((state)=>state.counter.count)


 const handleIncrement =()=>{
  if(amount==""){
    alert("plese provide value")
  }else{
    //update state in store
    dispatch(incrementByAmount(Number(amount)))
  }

 }


  return (
    <div style={{height:"70vh"}} className='justify-content-center align-iems-center w-100 d-flex'>


    <div className='d-flex justify-content-center align-items-center  border rounded p-5 w-25 flex-column'>
        
<h1 style={{fontSize:"100px"}}>{count}</h1>
<div className='w-10 m-5 d-flex justify-content-between'>
    <div className='btn btn-success' onClick={()=>dispatch(increment())}>increment</div>
    <div className='btn btn-warning' onClick={()=>dispatch(decrement())}>decrement</div>
    <div className='btn btn-danger' onClick={()=>dispatch(reset())}>reset</div>

</div>
<div className='-d-flex'>
  <input type="number" className='form-control' placeholder='enter the amount' style={{border:"1px"}} onChange={e=>setAmount(e.target.value)} /> <br />
  <div className='btn btn-primary'onClick={handleIncrement} >submit</div>
</div>
    </div>
    </div>

  )
}

export default Counter