import "./App.css";
import Aboutme from "./components/Aboutme";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const[alert,setAlert]=useState("null")
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggle=()=>{
    if(mode ==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#161212'
      showAlert("dark mode is Enabled","success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      showAlert("light mode is Enabled","success");
    }
  }
  return (
    <> 
    <Router> 
      <Navbar title="TextTiles" about="about " mode={mode} toggle={toggle}/>       
      <Alert alert={alert}/>
    <div className="container my-3">
       <Routes> 
          <Route exact path="/about" element={<Aboutme mode={mode}/>} />
         
         
          <Route exact path="/" element={ <Textfrom showAlert={showAlert} head="Enter The Text you Want To Analyze" mode={mode}/> }/>
          {/* <Textfrom showAlert={showAlert} head="Enter The Text you Want To Analyze" mode={mode}/>  */}
          
          </Routes>
         
    </div>
    </Router>
    </>
  );
}

export default App;
 