import {useEffect, useState} from "react";
import {findById} from "./service/TourService";
import {Link, useParams} from "react-router-dom";

export default function Datill(){
    const [tour,setTour] = useState({})
    const {id} = useParams()
    useEffect(() =>{
        findById(id).then(res =>{
            setTour(res)
        } )
    })
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
                <Link to={"/"} className={'btn btn-primary'} >Danh Sách</Link>
            </div>
        </>
    )
}