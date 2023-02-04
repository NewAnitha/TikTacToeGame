import React, { useState } from 'react'

export default function AddUser() {

    const [data,setData]= useState({
        username:"",
        email:"",
        phonenumber:""
    })
    const {username,email,phonenumber}=data
    function handleForm(e){
        setData({...data,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(data,"daaaaaaaata");
    }
    function handleCancel(){
        setData({
            username:"",
            email:"",
            phonenumber:""
        })

}
    // }
  return (
    <div>
        <h1>Add User</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" name="username" className='p-3 border border-2 mb-2 rounded-md' placeholder='Name' value={username} onChange={(e)=>handleForm(e)} minLength={8} required></input> <br/>
        <input type="text" name="email" className='p-3 border border-2 mb-2 rounded-md' placeholder='Email' value={email} onChange={(e)=>handleForm(e)} minLength={10} required></input> <br/>       
         <input type="text" name="phonenumber" className='p-3 border border-2  mb-2 rounded-md' placeholder='Phone Number' value={phonenumber}
                onChange={(e)=>handleForm(e)} maxLength={10} required></input> <br/>
         <div className='flex flex-row space-x-10 ml-[600px]'>
         <button type='button' className='border border-2 rounded-md' onClick={handleCancel}>Cancel</button>
         <button type='submit' name="submit" className='border border-2 bg-blue-200 rounded-md'>Submit</button>

         </div>
         </form>

    </div>

  )
}

// export default AddUser;