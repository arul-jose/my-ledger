import './Login.css';

function Login(props) {
  return (
   <div className="login-container">
    <button onClick={props.reset}>Go Back</button>
      This is Login Page for {props.name}
   </div>
  );
}

export default Login;
