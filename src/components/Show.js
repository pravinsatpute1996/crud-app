import React ,{ useState }  from "react";import { useEffect } from "react";
import axios from "axios";
import "./style.css"
import { useNavigate, useParams ,Link } from "react-router-dom";

function Show(){
    const {id}=useParams();

    const [data, setData] = useState([]);
    const [record, setrecord] = useState([]);
    useEffect(() => {
      axios.get("https://668706a183c983911b045da0.mockapi.io/huEdge/Appointment/"+id)
      .then((res) =>setData(res.data));
    }, []);
    return(

        <div className="d-flex justify-content-center align-items-center detail-card">
        <div className="card border p-5 detail-card-info"> 
            <h2 className="p-1 detail-card-text text-center">Patient Details</h2><br/><br/>
            <strong className="text-white fs-5">Patient Number:- {data.id}</strong><br/>
            <strong className="text-white fs-5">Doctor Special case:- {data.Speciality}</strong><br/>
            <strong className="text-white fs-5">Doctor name:- {data.Doctor}</strong><br/>
            <strong className="text-white fs-5"> Patient  Name:- {data.PatientName}</strong><br/>
            <strong className="text-white fs-5"> Patient  Admit Date:- {data.Date}</strong><br/>
            <Link to="/graph" className="btn btn-success text-white">Detailed Graph View</Link>
        </div></div>
    )
}
export default Show;