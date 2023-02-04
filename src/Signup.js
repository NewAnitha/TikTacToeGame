import { useState } from "react"
export  const Signup= ()=>{
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        phoneNumber:"",
        password:""
    })
    const {username,email,phoneNumber,password}=formData
    const handleChange =e=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=e=>{
        e.preventDefault()
        console.log(formData);
    }
    return(
        <div>
            {/* <center> */}
            <h1 className="my-3 text-2xl"> Sign Up page</h1>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-5 items-center">

                    <input type="text" name="username" value={username} onChange={handleChange} className="border border-2 p-2" placeholder="User Name"/>
                    <input type="text" name="email" value={email} onChange={handleChange} className="border border-2 p-2" placeholder="Email"/>
                    <input type="text" name="phoneNumber" value={phoneNumber} onChange={handleChange} className="border border-2 p-2" placeholder="Phone Number"/>
                    <input type="password" name="password" value={password} onChange={handleChange} className="border border-2 p-2" placeholder="Password"/>
                    <button type="submit" name="submit" className="bg-red-500 rounded-md p-2">Submit</button>
                </form>
            {/* </center> */}
        </div>
    )
}