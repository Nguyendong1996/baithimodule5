import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {findById, UpdateTour} from "./service/TourService";

export default function CreateTour(){
    let navigate = useNavigate();
    let [tour,setTour] = useState({})
    const {id} = useParams()
    useEffect(() =>{
        findById(id).then(res =>{
            setTour(res)
        }).catch(() =>{
            return {}
        })
    },[])
    function updateTour(e){
        e.id = id
        UpdateTour(e,navigate,id).then()
    }
    return(
        <>
            <h1>Sua Tour</h1>
            <Formik initialValues={tour}

                    onSubmit={(e) =>{updateTour(e)}}
                    enableReinitialize={true}
            >

                <Form>
                    <div className="mb-3">
                        <label htmlFor={'title'} className="form-label">Tên Tour</label>
                        <Field type={'text'} name={'title'} className={'form-control'} id="{'title'}"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor={'price'} className="form-label">Giá</label>
                        <Field type={'text'} name={'price'} className={'form-control'} id="{'price'}"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor={'description'} className="form-label">Mô Tả</label>
                        <Field type={'text'} name={'description'} className={'form-control'} id="{'description'}"/>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <button className={'btn btn-primary'} type={'submit'}>sua</button>
                        <Link className={'btn btn-secondary'} to={'/'}>Huỷ</Link>
                    </div>
                </Form>

            </Formik>
        </>
    )
}