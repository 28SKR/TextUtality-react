

import React from 'react'

import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Textform from  './component/Textform';
import { useState } from 'react';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
  
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const[alert, setAlert]= useState(null);
  
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode=== 'light')
    {setMode('dark');
     document.body.style.backgroundColor='#a59ac8';
     showAlert("Dark mode has been enabled","success");
     document.title = 'TextUtils-Dark Mode';
    //  setInterval(() => {
    //   document.title = 'TextUtils is Amazing ';
    //  }, 2000);
    //  setInterval(() => {
    //   document.title = ' Install TextUtils Now';
    //  }, 1500);
  }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils-Light Mode';
    }
     
  }
  return (
   
  <>
   {/* <Router> */}
   <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Textform showAlert={showAlert} heading="Enter the text to analyze below " mode={mode}/>
   {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
            
          
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below " mode={mode}/>}/>
          
           
          
    </Routes>
     */}
   
    
   
   {/* <Navbar/> */}
 </div>
   
 {/* </Router> */}
  </>
   
  );
}

export default App;
