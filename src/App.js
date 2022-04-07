import "./App.css";
// import Aboutme from "./components/Aboutme";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState("light")
  const toggle=()=>{
    if(mode ==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#161212'
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
      <Navbar title="TextTiles" about="about " mode={mode} toggle={toggle}/>         {/* importing Navbar from components */}
    <div className="container my-3">
    <Textfrom head="Enter The Text you Want To Analyze" mode={mode}/>
      {/* <Aboutme/> */}


    </div>
    </>
  );
}

export default App;
 