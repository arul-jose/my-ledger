import './Register.css';

function Register() {
  return (
    <div className="register-container">
      
        {/* This is Register Page */}
        <div className='title-createAccount'>Create an Account</div>
        <div className='form-box'>
          <form className='form'>
            <input className='input' type="text" class="input" placeholder="First Name" required></input>
            <input className='input' type="text" class="input" placeholder="Last Name"></input>
            <input className='input' type="text" class="input" placeholder="Username" required></input>
            <input className='input' type="email"  class="input" name="email" placeholder="Email Address"></input>
            <input className='input' type="password" class="input" placeholder="Password" required></input>
            <input className='input' type="password" class="input" placeholder="Confirm Password" required></input>
            <button className='Register'>REGISTER</button>
          </form>
        </div>
      
    </div>
  );
}

export default Register;
