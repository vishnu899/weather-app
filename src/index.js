import React from "react";
import ReactDOM from "react-dom/client";
import { Router,Link, BrowserRouter, Routes,Route } from "react-router-dom";
import './index.css'
import Login from "./login";
import Signup from "./signup";
import Landing from "./Landing";
import { useState } from "react";
import Box from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));

// function App()
// {

//   const[users,setusers] = useState(
//     [
//         {
//             username:"vishnu",
//             password:"123"
//         }
//     ]
// )
//   return(

//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
//         <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
//         <Route path='/landing' element={<Landing/>}></Route>
//         </Routes>
//     </BrowserRouter>
//   )
// }
root.render(
  
    <>
    <Box/>
    </>

)
