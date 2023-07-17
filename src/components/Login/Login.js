import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import './Login.css'
import Home from '../../PAGES/HomePage/Home';

const Login = () => {

  const[logindata, setlogindata]=useState({});
  const [addClass, setaddClass] = useState("");
  const {login,setlogin}=useContext(UserContext);

  const [loggedin,setloggedin]=useState(false);

  const handleChange=(evt)=>{
    const value=evt.target.value;
    setlogindata({
      ...logindata,
      [evt.target.name]:value,
    })

  }

  const[registerdata,setregisterdata]=useState({});


  const registerHandleChange=(evt)=>{
    const value=evt.target.value;
    setregisterdata({
      ...registerdata,
      [evt.target.name]:value,

  })}

  const loginFormHandler=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8083/user/login",logindata).then((res)=>{

      setlogin(res.data);
      setloggedin(true);
    }).catch((errors)=>{
      alert("invalid username or password");
    })
  
  }

  const registerFormHandler=(e)=>{
    e.preventDefault();
    console.log("hello");
    console.log(registerdata);
    axios.post("http://localhost:8083/user/user",registerdata).then((res)=>{
      console.log(res);
    }).catch((errors)=>{
      alert("All fields are mandatory!Enter valid Email & password")
    })
  }
  if(loggedin){
  return <Navigate to="/home"></Navigate>
  }
   else{ 
    return (
    <div className={`container ${addClass} `} id='container'>
      <div className='form-container sign-up-container'>
        <form onSubmit={registerFormHandler}>
          <h1>Create Account</h1>
          <input type="text" placeholder='Name' name="name" onChange={registerHandleChange}/>
          <input type="email" placeholder='Email' name="email" onChange={registerHandleChange} />
          <input type="password" placeholder='Password' name="password" onChange={registerHandleChange} />
          <button type="submit">REGISTER</button>
        </form>
      </div>


      <div className='form-container sign-in-container'>
        <form onSubmit={loginFormHandler}>
          <h1>Login</h1>
          <label>Email</label>
          <input type="email" placeholder='Email' name="email" onChange={handleChange} />
          <label>Password</label>
          <input type="password" placeholder='Password' name="password" onChange={handleChange} />
          <button type="submit"> Login</button>
        </form>
      </div>

      <div className='overlay-container'>
        <div className='overlay'>
          <div className='overlay-panel overlay-left'>
            <button className='ghost' id='signIn' onClick={() => setaddClass()}>
              GO TO LOGIN
            </button>
          </div>

          <div className='overlay-panel overlay-right'>
            <button className='ghost' id='signUp' onClick={() => setaddClass("right-panel-active")}>
             Not a Member yet! <br></br> GO TO REGISTER
            </button>
          </div>



        </div>
      </div>
    </div>
  );
}
}
export default Login
