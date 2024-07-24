import { useState } from 'react';
import './Login.css';
import Expense from './Expense';

function Login(props) {
  const [status, updateStatus] = useState("choose");
  const finalLoginClick = () => {
    alert("Please fill out all fields");
    updateStatus("login")
  }
  const reset = () => {
    updateStatus("choose");
  }

  return (


    <div className="login-container">
      {status == "choose" ? 
      
      
       /*{ This is Login Page for {props.name}  }*/
        < div className="register-container">
      {/* This is Register Page */}
      <div className='title-Login'>Sign in to your account</div>
      <div className='form-box'>
        <form className='form'>
          <input className='input' type="email" class="input" name="email" placeholder="Email Address"></input>
          <input className='input' type="password" class="input" placeholder="Password" required></input>
          <button className='loginBtn' onClick={finalLoginClick}>LOGIN</button>
          <div><button className='gobackBtn' onClick={props.reset}>GO BACK</button></div>
        </form>
      </div>

    </div>
      
      :
      null

      }
      

    {status == "login" ?
          <Expense name="allan" reset={reset}/>
          :
          null
        }
        
    </div >
  );
}

export default Login;
