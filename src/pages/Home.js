import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import { useNavigate, NavLink, Link } from "react-router-dom";
import "../pages/nav.css";
const Home = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const navigate = useNavigate();
  const handleClickme = () => {
    navigate("/addnew");
  };
  const handlelogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/register");
  };
  const username = JSON.parse(localStorage.getItem("user"));

  const [columns, setcolumns] = useState([]);
  const [record, setrecord] = useState([]);
  useEffect(() => {
    axios.get("https://668706a183c983911b045da0.mockapi.io/huEdge/Appointment").then((res) => {
      setcolumns(Object.keys(res.data[0]));
      setrecord(res.data);
    });
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink className="nav-logo">
            <span>HealthCare</span>
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu" : "nav-menu"}>
            <li className="nav-item welcome-msg">
              <NavLink className="nav-link" onClick={handleClick}>
                Welcome {username.name}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links" onClick={handleClick}>
                Home
              </NavLink>
            </li>
           
            <li className="nav-item" onClick={handleClickme}>
              <NavLink className="nav-links" onClick={handleClick}>
                Add Appointment
              </NavLink>
            </li>
            <li onClick={handlelogout}
        data-mdb-button-init
        data-mdb-ripple-init
        className="float-end btn btn-danger btn-block ">
              <NavLink className="nav-links">Logout</NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon"> </span>
            ) : (
              <span className="icon"></span>
            )}
          </div>
        </div>
      </nav>

      <div className="container">
        {/* <div className="info">
      {columns.map((c,i)=>(
        <div key={i}>{c}</div>
      ))}
    </div> */}
        <div>
          <h3 className="text-center heading">Remaining OPD Status</h3>
          <div className="d-flex gap-3 flex-wrap">
            {record.map((d, i) => (
              <div className="card mb-2 mycardcss col-3 p-2" key={i}>
                <h4>
                  <span className="pe-2">Patient Number:-</span>
                  {d.id}
                </h4>
                <h4>
                  <span className="pe-2">Doctor:-</span>
                  {d.Doctor}
                </h4>
                <h4>
                  <span className="pe-2">Patient Name:-</span>
                  {d.PatientName}
                </h4>
                <h4>
                  <span className="pe-2">Speciality:-</span>
                  {d.Speciality}
                </h4>
              
                <Link to= {`/update/${d.id}`} className="btn btn-success">Edit Appointment</Link>
          <button onClick={e=>handledelet(d.id)} className="btn btn-danger">Cancel Appointment</button>
          <Link to= {`/showmore/${d.id}`} className="btn btn-primary">Detail</Link>   
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
  function handledelet(id){
    const conf = window.confirm("Do you want to delete");
    if(conf){
      axios.delete("https://668706a183c983911b045da0.mockapi.io/huEdge/Appointment/"+id)
      .then(res=>{alert("appointment canceled");
        navigate("/")
        window.location.reload(false);

    })
    }
  }
};
export default Home;
