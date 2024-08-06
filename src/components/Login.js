import React ,{ useState } from "react";

import { useNavigate , Link } from "react-router-dom";

import "../components/style.css"
const Login =()=>{
  const Navigate = useNavigate();
  const [input , setinput] = useState({
    
    email: "",
    password:""
  })
  const Handlelogin=(e)=>{
    e.preventDefault();
    const loggeduser=JSON.parse(localStorage.getItem("user"));
    if(
      input.email===loggeduser.email &&
      input.password===loggeduser.password
    ){
      localStorage.setItem("loggedin",true)
      Navigate("/")
    }else{
      alert("wrong email and password")
    }
  }
  return <>
   <div className="myclass">
    <div className="global-form">
<ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="tab-login" data-mdb-pill-init href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login Here</a>
  </li>
</ul>
<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form onSubmit={Handlelogin}>
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="email" id="loginName" className="form-control"
            name="email" value={input.email} onChange={(e)=>
              setinput({...input,[e.target.name]:e.target.value})
               } />
        <label className="htmlForm-label" htmlFor="loginName">Email or username</label>
      </div>
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="password" id="loginPassword" className="form-control"
          name="password" value={input.password} onChange={(e)=>
            setinput({...input,[e.target.name]:e.target.value})
             } />
        <label className="htmlForm-label" htmlFor="loginPassword">Password</label>
      </div>
      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>
      <div className="text-center">
        <p>Not a member? <Link to="/register">Register</Link></p>
      </div>
    </form>
  </div>
</div>
</div>
</div>
  </>
}
export default Login