import React, { useState } from 'react'

export const Timer = () => {
    let time = new Date().toLocaleTimeString();
    // let Day= new Date().getDay()
    // console.log(Day,"Day");
    const [cTime,setCTime]=useState(time)
    function Updatetime(){
        time = new Date().toLocaleTimeString();
        setCTime(time)
    }
    setInterval(Updatetime,1000)
  return (
    <div className='grid  place-content-center text-center mt-[200px]'>
        <h1 className='text-5xl text-bold text-green-900'>Timer</h1> <br/>
        <h1 className='text-5xl text-bold text-blue-900'>{cTime}</h1>
        
    {/* <button onClick={Updatetime}>Update Time</button> */}
     </div>
  )
}

// export default Timer