import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({setLogin}) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="LoginPopUp">
      <div className="form-box">
        <form className="form">
          <div className="login-popup-title">
          <h2 className="head">{currState}</h2>
          <img onClick={()=>setLogin(false)} src={assets.cross_icon} alt="" />
          </div>


          <span className="subtitle">
            Create a free account with your email.
          </span>
          <div className="form-container">
            {currState === "login" ? 
              <></>
             : 
              <input type="text" className="input" placeholder="Full Name" />
            }
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button>{currState==='signUp'?'create an account':"login"} </button>
        </form>
        {currState==='login'?<div className="form-section">
          <p> Create a new account? <button  onClick={()=>setCurrState('Sign Up')}>Click here</button></p></div>:
          <div className="form-section"><p> Already have an acount? <button onClick={()=>setCurrState('login')}>Click here</button></p></div>
        }
        
      </div>
    </div>
  );
};

export default LoginPopUp;
