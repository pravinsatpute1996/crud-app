import { Formik ,Form, Field } from "formik";
import React from "react";
import "../components/style.css"
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup"
const Register =()=>{
  const navigate = useNavigate();
  const defailtvalue={
    name: "",
    email: "",
    password:""
  };
  const validationSchema = yup.object().shape({
    name:yup.string().required("required the name")
  })
  const [input , setinput] = useState({
    name: "",
    email: "",
    password:""
  })
  // store value in local storage
  const handlesubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/login")
  }
  const Handlesubmitvalue = (values)=>{
    console.log(values)
  }
  return<>
  <div className="myclass">
    <div className="global-form tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="tab-login" data-mdb-pill-init href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Register Here</a>
  </li>
</ul>
<Formik initialValues={defailtvalue} validationSchema={validationSchema} onSubmit={Handlesubmitvalue}>
    <form onSubmit={handlesubmit}>
    <div data-mdb-input-init className="form-outline mb-4">
        <Field type="text" id="loginName" className="form-control" 
        name="name" value={Field.name} onChange={(e)=>
       setinput({...Field,[e.target.name]:e.target.value})
        }
        />
        <label className="htmlForm-label" htmlFor="loginName">Name</label>
      </div>
      <div data-mdb-input-init className="form-outline mb-4">
        <Field type="email" id="loginEmail" className="form-control"
         name="email" value={Field.email} onChange={(e)=>
          setinput({...Field,[e.target.email]:e.target.value})
           }
        />
        <label className="htmlForm-label" htmlFor="loginName">Email or username</label>
      </div>
    
      <div data-mdb-input-init className="form-outline mb-4">
        <Field type="password" id="loginPassword" className="form-control"
         name="password" value={Field.password} onChange={(e)=>
          setinput({...Field,[e.target.name]:e.target.value})
           }
        />
        <label className="htmlForm-label" htmlFor="loginPassword">Password</label>
      </div>

    

      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

     
      <div className="text-center">
        <p>Have Already Account? <Link to="/login">Login </Link></p>
      </div>
    </form>
    </Formik>
  </div></div>
  </>
}
export default Register