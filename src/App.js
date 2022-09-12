import {Route, Routes} from "react-router-dom"
import Adduser from "./pages/Adduser";
import Editusers from "./pages/EditUser";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="adduser" element={<Adduser />}></Route>
        <Route  exact path="/edituser/" element = {<Editusers />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
