import React, { useEffect, useState,useRef } from 'react'

// const RefHook = () => {
//     const [count,setCount]=useState()
//     const [myData,setMyData]=useState()

//     useEffect(()=>{
//         setCount(count+1)
//     })
//   return (
//     <div className='flex justify-content'>
//         <input type="text" className="p-3 " value={myData} onChange={(e)=>{
//             setMyData(e.target.value)
//         }}></input>
//         <button type='button' className='bg-blue-200'> count the number of rendering {count} </button>
//     </div>
//   )
// }


const RefHook = () => {
    // const [count,setCount]=useState()
    const [myData,setMyData]=useState()
    const count = useRef(0)
    useEffect(()=>{
        // setCount(count+1)
        count.current= count.current +1;
    })
  return (
    <div className='flex items-center flex-col '>
        <input type="text" className="p-3 border border-2 mb-2 " value={myData} onChange={(e)=>{
            setMyData(e.target.value)
        }}></input>
        <button type='button' className='bg-blue-200 p-3'> count the number of rendering {count.current} </button>
    </div>
  )
}

export default RefHook