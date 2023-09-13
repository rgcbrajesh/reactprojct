import "./App.css";
import Prograsbar from "./component/Prograsbar";
import Contact from "./component/Contact";
import Detail from "./component/Detail";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
     
      <div className="container-fluid">
      <Navbar />
        <div className="row">

        <div className="col-md-4 "><Detail /></div>
        <div className="col-md-8   "><Contact />
        <div className="row">
          <div className="col-md-6 mt-5">
          <Prograsbar name="Project Skill" />
          </div>
          <div className="col-md-6 mt-5">
          <Prograsbar name="Programming Skill" />
          </div>
        </div>
        </div>
        {/* <div className="row">
          <div>
          <Prograsbar name="Project Skill" />
          </div>
        </div> */}
        
        </div>
      </div>
      
    </div>
  );
}

export default App;
