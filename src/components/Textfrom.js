import React from "react";


export default function Textfrom(props) {
  return (<> 
  <div>    
   <h2>{props.head}</h2>
<div className="mb-3">
  <textarea className="form-control" id="mybox" rows="12"></textarea>
</div>
<button className="btn btn-primary">conver to uppercase</button>
</div>
</>
  )
}
