import {useEffect, useState} from "react";
import {DeleteStudentById, findAllTour} from "./service/TourService";
import {Link} from "react-router-dom";

export default function ListTour(){
    let [tours,setTours] = useState([]);
    let [check,setCheck] = useState(false)
    useEffect(() => {
        findAllTour().then(res =>{
            setTours(res)
        })
    },[check])


    return(
        <>
            <h1 style={{textAlign:"center"}}>List Tour</h1>
            <Link to={"/create"}  className={'btn btn-primary'}>Thêm</Link>
            <table className={"table table-striped"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th colSpan={2}>Lựa chọn</th>
                </tr>
                </thead>
                <tbody>
                {tours.map((tours,count =1) =>{
                    return(
                        <>
                            <tr>
                                <td>{++count}</td>
                                <td><Link to={"/datill/"+tours.id}>{tours.title}</Link></td>
                                <td>{tours.price}</td>
                                <td><Link to={"/update/" +tours.id} className="btn btn-warning">Update</Link></td>
                                <td><Link className="btn btn-danger" to={"/delete/" +tours.id}>Delete</Link></td>
                            </tr>
                        </>
                    )
                })}
                </tbody>
            </table>
        </>
    )

}