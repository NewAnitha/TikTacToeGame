import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {Home} from './components/Home'
import {Contact} from './components/Contact'
import {About} from './components/About'
import {Error} from './components/Error'
import { Table } from './components/Table';

import "./App.css"


const Anitha = () => {
    const Name=()=>{
        return <div> Name component</div>
    }
  return (

    <Router>
        <div className='App'>          
            <div className='flex flex-row space-x-20 ml-20'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/about' element={<About/>}></Route>
                <Route exact path='/contact' element={<Contact/>}></Route>
                <Route exact path='/table' element={<Table/>}></Route>
                <Route exact path='/contact/Name' element={<Name/>}></Route>
                <Route  path='*' element={<Error/>}></Route>

            </Routes>
        </div>
    </Router>
  )
}

export default Anitha