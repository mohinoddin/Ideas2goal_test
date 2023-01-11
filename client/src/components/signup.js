import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import './signup.css'
// import validator from 'validator'


function ValidateEmail(mail) 
{
 if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    // alert("You have entered an invalid email address!")
    return (false)
}



const Signup = () => {
    let navigate = useNavigate()

    const [signupData, setSignupData] = useState({ email: "", password: "", confirmpassword: "" })


    const handleSignup = () => {
        if (signupData.password === signupData.confirmpassword && signupData.password.length > 0 && signupData.email.length>0 && ValidateEmail(signupData.email)) {
            axios({
                url: "http://localhost:3001/signup",
                method: "POST",
                headers: {

                },
                data: signupData,
               
            }).then((res) => {
                console.log(res)
            

                alert(res.data)
                navigate("/")
                
            }).catch((err) => {
                
                alert(err.response.data)
                console.log(err)
            })
        } else {
            if (signupData.email.length === 0) {
                alert("email cannot be empty");
            }else if(!ValidateEmail(signupData.email)){
                alert("email is not valid")
            } 
             else if (signupData.password.length === 0) {
                alert("password cannot be empty")
            } 
            else{
                alert("password and confirm password should be same")
            }
        }
    }
    const navisignin = () => {
        navigate("/")
    }
    return (
        <div className="signupcontainer">
            <div className="box">
                <h1 className="logo">Register</h1>
                <p className="para">Create New Account</p>
                {/* <form id="pushing" > */}
                    <div id="email">
                        <input className="signup-input" type="email" required placeholder="Email ID" onChange={(e) => { setSignupData({ ...signupData, email: e.target.value }) }} />
                    </div>
                    <div id="password">
                        <input className="signup-input" type="password" required placeholder="Password" id="password" onChange={(e) => { setSignupData({ ...signupData, password: e.target.value }) }} />
                    </div>
                    <div id="confirmpassword">
                        <input className="signup-input" type="password" required placeholder=" Confirm password" id=" confirm password" onChange={(e) => { setSignupData({ ...signupData, confirmpassword: e.target.value }) }} />
                    </div>
                {/* </form> */}
                <button className="sign" onClick={()=>{handleSignup()}}>Sign Up</button>
                
            </div>
            <p className="foot" onClick={navisignin}>Sign-in</p>
        </div>
    )
}
export default Signup