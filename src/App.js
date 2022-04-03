import "./App.css";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
function App() {
  return (
    <>
      <Navbar title="TextTiles" about="about "/>         {/* importing Navbar from components */}
    <div className="container my-3">
    <Textfrom head="Enter The Text you Want To Analyze"/>


    </div>
    </>
  );
}

export default App;
 