import React
,{useState} 
from 'react'
// import { useNavigate } from 'react-router-dom';
import {useParams,useLocation } from 'react-router-dom';

export const Table = (props) => {
    const {type}=useParams()
    const {userData}= useLocation().state
    console.log(type,"typpppppppppe",userData,"statttttttt");
const [totalData,setTotalData]=useState([])
// const navigate= useNavigate()
// useEffect(() => {
    setTotalData([...totalData,userData])
// },[userData])

// const tableData = [
//     { id: 1, name: "anita", email: "anitha@gmail.com", phone: "1234567890" },
//     { id: 2, name: "sunitha", email: "sunitha@gmail.com", phone: "7346374298" },
//     { id: 3, name: "sanjay", email: "snajay@gmail.com", phone: "0987654321" },
//   ];
  function handleEdit(item) {
    console.log(item, "iddddddd");

    alert(
      `the user name is ${item.name} and email is ${item.email} and phone number is ${item.phone}`
    );
  }
  return (
    <div>
        <h1>User Management</h1>
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
  )
}

// export default Table