import user_icon from './assets/person.png'
import email_icon from './assets/email.png'
import password_icon from './assets/password.png'
import { useState } from 'react'
import './App.css'

function App() {
  const [action, setAction] = useState("Sign Up");
  const [signUpActive, setSignUpActive] = useState(true);

  const userAuth = (e) => {
    const clickedAction = e.target.innerHTML;
    setAction(clickedAction);
    setSignUpActive(clickedAction === "Sign Up");
    if(clickedAction === "Login"){
      document.querySelector(".name").style.display = "none";
    }else{
      document.querySelector(".name").style.display = "flex";
    }
  }

  return (
    <>
     <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className='inputs'>
      <div className="input name">
        <img src={user_icon} alt="user" />
        <input type="text" placeholder='Name'/>
      </div>
      <div className="input">
        <img src={email_icon} alt="" />
        <input type="email" placeholder='Email Id'/>
      </div>
      <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder='Password'/>
      </div>
      </div>
      <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className={"submit " + (signUpActive ? '' : 'gray')} onClick={(e) => {userAuth(e)}}>Sign Up</div>
        <div className={"submit " + (signUpActive ? 'gray' : '')} onClick={(e) => {userAuth(e)}}>Login</div>
      </div>
     </div>
    </>
  )
}

export default App
