
// import { Component } from "react";
// export default class person extends Component{
//     render(){
//         return(
//             <div>
//                 Learning
//             </div>
//         )
//     }
// }


import { useState } from "react"
export default function Person(){

    const [data,setData]=useState({
        username:"",
        password:""
    })
    const {username,password}=data
    const changeHandle= e=>{
        setData({...data, [e.target.name]:e.target.value})
    } 
    const handleSubmit =e=>{
        e.preventDefault();
        console.log(data);
    }
    return(
        <div>
      <center>
      <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={username} onChange={changeHandle}/><br/>
      <input type="password" name="password" value={password}  onChange={changeHandle} /><br/>
      <input type="submit" name="submit"/>
      </form>
      </center>
    </div>
    )
}
