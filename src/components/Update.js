import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const navigate=useNavigate();
  const [inputData, setInputData] = useState({
    Doctor: "",
    PatientName: "",
    Speciality: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://668706a183c983911b045da0.mockapi.io/huEdge/Appointment/" + id
      )
      .then((res) => setData(res.data));
  }, []);
  const handelupdate = (event) => {
    event.preventDefault();
    axios
      .put(
        "https://668706a183c983911b045da0.mockapi.io/huEdge/Appointment/" + id,
        inputData
      )
      .then((res) => {
        alert("data added sucessfully");
        navigate("/");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center detail-card">
      <form onSubmit={handelupdate}>
        {" "}
        <h2>Update Info</h2>
        <br />
        <label htmlFor="PatientNumber">Patient Number:</label>
        <input
          type="text"
        //   value={data.id}
          name="PatientNumber"
          className="form-control"
        />
        <br />
        <label htmlFor="PatientName">Name:</label>
        <input
          type="text"
          name="PatientName"
          value={data.PatientName}
          className="form-control"
          onChange={(e) =>
            setInputData({ ...inputData, PatientName: e.target.value })
          }
        />
        <br />
        <label htmlFor="Doctor">doctor name:</label>
        <input
          type="Doctor"
          name="Doctor"
          value={data.Doctor}
          className="form-control"
          onChange={(e) =>
            setInputData({ ...inputData, Doctor: e.target.value })
          }
        />
        <br />
        <label htmlFor="Speciality">Speciality name:</label>
        <input
          type="Speciality"
          name="Speciality"
          value={data.Speciality}
          className="form-control"
          onChange={(e) =>
            setInputData({ ...inputData, Speciality: e.target.value })
          }
        />
        <br />
        <br />
        <button className="btn btn-info">Update</button>
      </form>
    </div>
  );
}
export default Update;
