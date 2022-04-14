// import React, { useState } from "react";

export default function Aboutme(props) {
  //  const [mystyle, setNewstyle] = useState({
  //   color:"black",
  //   backgroundColor:"white",
  //   width:"100vw"
  //  })
  //  const [btntext, setbtnNewtext] = useState(" Enable dark-mode")
  let mystyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "black",
  };

  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3"> About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
          Text-utils gives a way to analyze your text quickly and effecintly 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
             text-utils is free character counter tool that allows you to count the character,make words uppercase,lower case ans remove the extra spaces 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
             ths word counter application work on all browser
            </div>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
}
