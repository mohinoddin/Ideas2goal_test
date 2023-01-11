import {  useNavigate } from "react-router-dom"
import "./logout.css"

const Logout=()=>{
    const nav=useNavigate()
    const logoutHandle=()=>{

        localStorage.clear()
        window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        window.history.go(1);
    };

// localStorage.setItem("authorization","")
 nav("/")
    }

    return(
<button  className="logout"onClick={logoutHandle}>Logout</button>
    )
}
export default Logout