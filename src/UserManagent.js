// import {
//     BrowserRouter as Router,
//     Switch,
//     Routes,
//     Route,
//     Redirect,
//     Navigate
//   } from "react-router-dom";
// import Link from "next-link";

// import {AddUser} from "./AddUser"
import React, { useState } from 'react'

const UserManagent = () => {

    const [data,setData]= useState({
        username:"",
        email:"",
        phonenumber:""
    })
    const [totalData,setTotalData]=useState([])
    const {username,email,phonenumber}=data
    function handleForm(e){
        setData({...data,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(data,"daaaaaaaata");
        setTotalData([...totalData,data])
        console.log([...totalData,data],"totalData");
    }
    function handleCancel(){
        setData({
            username:"",
            email:"",
            phonenumber:""
        })
    }
  const tableData = [
    { id: 1, name: "anita", email: "anitha@gmail.com", phone: "1234567890" },
    { id: 2, name: "sunitha", email: "sunitha@gmail.com", phone: "7346374298" },
    { id: 3, name: "sanjay", email: "snajay@gmail.com", phone: "0987654321" },
  ];
  function handleEdit(item) {
    console.log(item, "iddddddd");

    alert(
      `the user name is ${item.name} and email is ${item.email} and phone number is ${item.phone}`
    );
  }
  function handleAddUser(){
   
  }

  return (
    <div>
      <h1>UserManagent</h1>
      {/* <AddUser/> */}
      

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

      <button onClick={()=>handleAddUser()}>Add user</button>

        
        <div className="flex ml-[700px]">
        <table className="table-auto  ">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              {/* <th className="ml-10"> <Link href="/addUser"> Edit</Link>
                </th> */}
            </tr>
          </thead>
          <tbody>
            {totalData.map((item) => {
              return (
                <tr>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-3 bg-cyan-200"
                    >
                      Edit
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default UserManagent;
