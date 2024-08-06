
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add()
{
    const [inputData,setInputData]=useState({Doctor:'' ,PatientName:'',Speciality:''})
    const navigate=useNavigate()
    function handleSubmit(event){
        event.preventDefault()
        axios.post('https://668706a183c983911b045da0.mockapi.io/huEdge/Appointment',inputData)
        .then(res=>{
            alert("data added sucessfully")
            navigate("/");
        }
        )

    }
    return(
    <div className="form d-flex w-100 h-100 justify-content-center  align-items-center">
        <div className="w-10 border bg-light p-5">
            <h3 className="pb-3">Create New Appointment</h3>
            <form onSubmit={handleSubmit}>
        <div>
                <label htmlFor="PatientName">Name:</label>
                <input type="text" name="PatientName" className="form-control"
               onChange={e=>setInputData({...inputData,PatientName:e.target.value})}/>
            </div><br/>
            <div>
                <label htmlFor="Doctor">doctor name:</label>
                <input type="Doctor" name="Doctor" className="form-control"
                 onChange={e=>setInputData({...inputData,Doctor:e.target.value})}/>

            </div><br/>
            <div>
                <label htmlFor="Speciality">Speciality name:</label>
                <input type="Speciality" name="Speciality" className="form-control"
                 onChange={e=>setInputData({...inputData,Speciality:e.target.value})}/>

            </div><br/>
            <button className="btn btn-info">Add Appointment</button>
            </form>
        </div>

    </div>
    )
}
export default Add