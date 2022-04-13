import "./App.css";
// import Aboutme from "./components/Aboutme";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import React, { useState } from 'react';
import Alert from "./components/Alert";
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
      <Navbar title="TextTiles" about="about " mode={mode} toggle={toggle}/>         {/* importing Navbar from components */}
      <Alert alert={alert}/>
    <div className="container my-3">
    <Textfrom showAlert={showAlert} head="Enter The Text you Want To Analyze" mode={mode}/>
      {/* <Aboutme/> */}


    </div>
    </>
  );
}

export default App;
 