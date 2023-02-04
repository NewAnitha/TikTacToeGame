// import Person from './Person.js';
import './App.css';
// import { Signup } from './Signup';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Redirect,
//   Navigate
// } from "react-router-dom";
// import Home from "./components/Home";
// // import About component
// import About from "./components/About";
// // import ContactUs component
// import Contact from "./components/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import Toggle from './Toggle';
// import RefHook from './RefHook';
// import AddUser from './AddUser';
// import UserManagent from './UserManagent';
import Game from "./Game"
function App() {
  return (
    <div className="App">
      {/* <div className='mt-10'>Home Component </div> */}
      {/* <Person/> */}
      {/* <Signup/> */}
      {/* <Toggle/> */}
      {/* <RefHook/> */}
      {/* <AddUser/> */}
      {/* <UserManagent/> */}
      <Game/>
    </div>
  );
}

export default App;
