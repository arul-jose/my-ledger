import './Welcome.css';
import Login from './Login';
import Register from './Register';
import { useState } from 'react';

function Welcome() {
  const [status, updateStatus] = useState("choose");
  const loginClick = () => {
    alert("Login");
    updateStatus("login")
  }
  const registerClick = () => {
    alert("Register");
    updateStatus("register")
  }
  const reset = () => {
    updateStatus("choose");
  }
  return (
    <div className="welcome-container">
      <div className="welcome-left-container">
        <h2 className='welcome-title'>WELCOME TO MY-LEDGER</h2>
        <p className='inside-text'>
        Perfect for recording your daily expenses, monitoring your weekly budget, and keep an eagle eye 
        on your monthly financial goals......

        </p>

      </div>
      <div className="welcome-right-container">
        {status == "choose" ?
          <div className="choose-container">
            <h3 className='user-text'>USER LOGIN</h3>
            <div><button className='login-btn' onClick={loginClick}>Login</button></div>
            <div><button className='register-btn' onClick={registerClick}>Register</button></div>

          </div>
          :
          null
        }
        {status == "login" ?
          <Login name="arul" reset={reset} />
          :
          null
        }
        {status == "register" ?
          <Register />
          :
          null
        }

      </div>

    </div>
  );
}

export default Welcome;
