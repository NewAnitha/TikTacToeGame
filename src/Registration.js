import React from 'react'
import {useFormik} from 'formik'
import { signUpSchema } from './schemas'
const initialValues ={
    name:"",
    email:"",
    password:"",
    confirm_password:""
}
export const Registration = () => {
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values,action) =>{
            console.log(values,"erbggggggggggggggggggggggggg");
            action.resetForm()
        }
    })
// console.log(errors,"ooooooooooooo");
  return (

    <div className='flex justify-center '>
      
        {/* <h1>
        Registration
    </h1> */}
        <div className="w-full max-w-md ">
        <label className="block text-gray-700 text-sm font-bold mb-2 flex justify-center text-blue-500" htmlFor="username">
        REGISTRATION
      </label>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        NAME
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="name" placeholder="Name" autoComplete='off' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
      {
        errors.name && touched.name ?(
            <p className="text-red-500 text-xs italic">{errors.name}</p> 
        ):null
      }
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        EMAIL
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" autoComplete='off' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
      {
        errors.email && touched.email ?(
            <p className="text-red-500 text-xs italic">{errors.email}</p> 
        ):null
      }
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        PASSWORD
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" autoComplete='off' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
      {
        errors.password && touched.password ?(
            <p className="text-red-500 text-xs italic">{errors.password}</p> 
        ):null
      }    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">
        CONFIRM PASSWORD
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm_password" type="password" placeholder="Confirm Password" autoComplete='off' name='confirm_password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
      {
        errors.confirm_password && touched.confirm_password ?(
            <p className="text-red-500 text-xs italic">{errors.confirm_password}</p> 
        ):null
      }
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
REGISTRATION      </button>
      {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
        FORGOT PASSWORD?
      </a> */}

    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>



    </div>
  )
}

// export default Registration
// create a modal in html?