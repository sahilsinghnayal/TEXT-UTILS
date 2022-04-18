// import React from "react";
import React, { useState } from 'react';


export default function Textfrom(props) {
  const uppercasebtn=()=>{
    // console.log("i am presses"+text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase ","success")
  }
  const lowercasebtn=()=>{
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerercase ","success")
  }
  const clearText=()=>{
    let newText= '';
    setText(newText);
    props.showAlert("Text has been cleared  ","success")
  }
  const removespace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ")) 
    props.showAlert(" Extra space is removed ","success")
  }
 
  const handleonchange=(event)=>{
    // console.log("on change");
    setText(event.target.value);  //onchange use kiya h jb humchange krein tb hoga
    //event.target.value use kiya changes krene krke liye .  jo user anter krega vo setText use update krdega 
  }
  const [text, setText] = useState(`enter text here`);
  return (<> 
  
  <div>    
   <h2 style={{color: props.mode==='dark'? 'white':'black'}}>{props.head}</h2>
<div className="mb-3">
  <textarea className="form-control" id="mybox"  value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'? '#808080a1':'white',color:props.mode==='dark'? 'white':'black'}} rows="12"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={uppercasebtn}  >Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={lowercasebtn}  >Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}  >Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={removespace}  >Remove space</button>

</div>
 <div className="container my-4"  style={{color: props.mode==='dark'? 'white':'black'}}>
   <h2>Your Text Summary</h2>
   <p>{text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length} words and {text.length} character</p>
   <h2>Preview</h2>
   <p>{text}</p>
 </div>

</>
  )
}

