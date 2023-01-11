import "./HomePage.css"
// import {CgChevronDown} from  "react-icons/cg";
// import {BiUser} from  "react-icons/bi";
import Logout from '../logout'
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

const HomePage = ()=>{
    let navigate = useNavigate()
    // const userId = localStorage.getItem("userid");
    // const userName= userId.split('@')[0]
  
    // navigate("/")

  
    useEffect(() => {
        if(localStorage.authorization === null || localStorage.authorization === undefined){
          navigate("/")
        }
        
      }, []);
      

   

   
 

    return(
        <>



        <div class="card">
  <div class="card-header">
   
  </div>
  <div class="card-body d-flex justify-content-between">
    <h5 class="card-title">Thank you for Login</h5>
    <span><Logout /></span>
   
    
  
</div>

       
        
         
          
     
       
       </div>

       

        </>
    )
    
}
export default HomePage