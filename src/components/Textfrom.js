// import React from "react";
import React, { useState } from 'react';


export default function Textfrom(props) {
  const uppercasebtn=()=>{
    // console.log("i am presses"+text);
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleonchange=(event)=>{
    // console.log("on change");
    setText(event.target.value);  //onchange use kiya h jb humchange krein tb hoga
    //event.target.value use kiya changes krene krke liye .  jo user anter krega vo setText use update krdega 
  }
  const [text, setText] = useState(`enter text here`);
  return (<> 
  
  <div>    
   <h2>{props.head}</h2>
<div className="mb-3">
  <textarea className="form-control" id="mybox"  value={text} onChange={handleonchange} rows="12"></textarea>
</div>
<button className="btn btn-primary" onClick={uppercasebtn}  >convert to uppercase</button>
</div>
</>
  )
}
