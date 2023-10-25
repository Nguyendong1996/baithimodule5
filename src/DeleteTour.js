import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {DeleteStudentById, findById} from "./service/TourService";

export default function DeleteTour(){
    let navigate = useNavigate();
    const {id} = useParams()
    const [tour,setTour] = useState({})
    useEffect(() =>{
        findById(id).then(res =>{
            setTour(res)
        })
    },[])
    function deleteTour() {
        if (window.confirm("Are you sure?")) {
            DeleteStudentById(id,navigate).then(() => {
                alert("Delete successfully!")
            })
        }
    }
    return(
        <>
            <div>
                <h1>Chi Tiết tour</h1>
                <br/>
                <p>{tour.title}</p>
                <br/>
                <p>{tour.price}</p>
                <br/>
                <p>{tour.description}</p>
                <br/>
                <button onClick={deleteTour} className="btn btn-danger" > Xoá</button>
                <Link to={"/"} className={'btn btn-primary'} >Danh Sách</Link>
            </div>
        </>
    )
}