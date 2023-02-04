import React, { useEffect, useState } from 'react'

const Toggle = () => {
    console.log("top");
    const [data,setData]=useState(0)
    const [data1,setData1]=useState(0)

    useEffect(()=>{
        console.log("ussssssseffect")
    },[data,data1])
    function handleIncrement(){
        setData(data+10)
    }
    function handleDecrement(){
        setData1(data1-5)
    }
    function handleChange(e){
        setData(Number(e.target.value))
    }
  console.log("between");
  return (
    <div className='flex justify-center'>
        {console.log("jSX")}
        <div className='flex flex-row' >
            <button className='p-3 bg-blue-200 rounded-sm' onClick={handleDecrement} >-</button>
            <input className='p-3 border border-2' value={data} onChange={(e)=>handleChange(e)}></input>
            <button className='p-3  bg-blue-200 rounded-sm' onClick={handleIncrement}>+</button>

        </div>
    </div>
  )
}

export default Toggle