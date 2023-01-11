import Signup from "./components/signup";
import Signin from "./components/signin";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';

// import AddProperty from './components/AddProperty';
import HomePage from './components/homepage/HomePage'
import Logout from "./components/logout";


function App() {
  return (
    <div className="App">
   
      

      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Signin/>}></Route>
             <Route path="/signup" element={<Signup/>}></Route> 
            <Route path="/home" element={<HomePage/>}></Route>
            <Route path="/logout"  element={<Logout/>}></Route> 

          </Routes>
      </BrowserRouter>
     
    </div>

  );
}

export default App;
