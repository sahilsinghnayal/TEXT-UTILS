import "./App.css";
// import Aboutme from "./components/Aboutme";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
function App() {
  return (
    <>
      <Navbar title="TextTiles" about="about "/>         {/* importing Navbar from components */}
    <div className="container my-3">
    <Textfrom head="Enter The Text you Want To Analyze"/>
      {/* <Aboutme/> */}


    </div>
    </>
  );
}

export default App;
 