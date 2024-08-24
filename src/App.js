// import React, { useState } from 'react';
// import './App.css';

import { useState } from "react"
import axios from "axios"

// function App() {
//   const [students,setstudents] = useState(['Manoj', 'Sanjay', 'Aslam', 'Vishnu', 'Mike']);
//   const [favorites, setFavorites] = useState([]);

//   const toggleFavorite = (student) => {
//     if (favorites.includes(student)) {
//       setFavorites(favorites.filter((fav) => fav !== student));
//     } else {
//       setFavorites([...favorites, student]);
//     }
//   };

//   const [newstu,setnewstu] = useState("")
//   function handlechange(evt)
//   {
//     setnewstu(evt.target.value)
//   }

//   function add()
//   {
//    setstudents([...students,newstu])
//   }

//    const[fav,setfav] = useState(true) 
//    const[st,setst] = useState(true) 

// function handleaddd()
// {
//   setfav(!fav)
//   setst(!st)
// }


// function vishnu()
// {
//  setfav(fav)
//   setst(st)
// }

  
  
//   return (
//     <div className="app-container">
//       <nav className='nav flex gap-20 bg-red-500'>
//             <h1 id='st' onClick={vishnu}>Student List</h1>
//             <h1 id='fa' onClick={handleaddd}>Favourite Student List</h1>
//         </nav>
//         <div className="input">
//             <input value={newstu} onChange={handlechange} type="text" />
//             <button onClick={add}>Add</button>
//         </div>
//       <div className="list-container" style={{display:st?"block":"none"}}>
        
//         <ul>
//           {students.map((student, index) => (
//             <li key={student} className="student-item">
//               <span className="student-number">{index + 1}.{student}</span>
              
//               <button
//                 onClick={() => toggleFavorite(student)}
//                 className={favorites.includes(student) ? 'remove-btn' : 'add-btn'}
//               >
//                 {favorites.includes(student) ? 'Added to  Favorite' : 'Add to Favorite'}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="favorite-container" style={{display:fav?"none":"block"}}>
//         <h2>Favorite Students</h2>
//         <ul>
//           {favorites.map((student, index) => (
//             <li key={student} className="student-item">
//               <span className="student-number">{index + 1}.{student}</span>
              
//               <button
//                 onClick={() => toggleFavorite(student)}
//                 className="remove-btn"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );


// }

// export default App;



function Box()
{

  const [city,setcity] = useState("")

  const [weather,setWeather] = useState("")
  const [temp,setTemp] = useState("")
  const [desc,setDesc] = useState("")
  const [rpt,setrpt] = useState([{
    id:1,
    name:"Chennai"}])
  function handleCity(evt)
  {
        setcity(evt.target.value)
  }

  function getWeather()
  {
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8348e0da3b3b65470f6cea667f889bb`)
  
    weatherData.then(function(success)
  {
    console.log(success.data)
    setWeather(success.data.weather[0].main)
    setDesc(success.data.weather[0].description)
    setTemp(success.data.main.temp)
   setrpt([...rpt,{name:city}])
   

  })
  
  }

  function handleDelete(deleteid)
  {
     var temparr = rpt.filter(function(item){
      if(item.id == deleteid)
        {
          return false
        }
        else{
          return true
        }
     })
     setrpt(temparr)
  }


  const [colorst,setcolorst] = useState(false)


  return(
    <div className="bg-black p-10">
      <div className="bg-white p-5 rounded-md">
       <div className="header">
       <h1 className="text-black font-medium text-xl">Weather Report for your city</h1>
       <p>I can give you a Weather report about your city :)</p>
       </div>

       <div className="get my-2">
        <input onChange={handleCity} className="p-1 bg-indigo-600 border-none" type="text" placeholder="Enter the city"/>
        <button onClick={getWeather} className="bg-black p-1 border-none text-white">Get Report</button>
       </div>

<div className="reprt">
  {
   rpt.map(function(item)
  {
    return(
      
      <div className="flex justify-center items-center my-5 gap-5">
        <h1>{item.name}</h1>
        <button onClick={()=>{handleDelete(item.id)}}>Clear</button>
      </div>

    )
  })
  }
</div>
       <div className="info my-5 flex flex-grow-1 justify-center items-center gap-5">
        <p style={{backgroundColor:"blue",color:"white",padding:"5px"}}><b>Weather:</b> {weather}</p>
        <p style={{backgroundColor:"red",color:"white",padding:"5px"}}><b>Temperature:</b> {temp}</p>
        <p style={{backgroundColor:"green",color:"white",padding:"5px"}}><b>Description:</b> {desc}</p>
       </div>
      </div>
    </div>
  )
}

export default Box