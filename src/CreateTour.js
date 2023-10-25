import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {SaveTour} from "./service/TourService";

export default function CreateTour(){
    let navigate = useNavigate();
    function createTour(e){
        SaveTour(e,navigate).then()
    }
    return(
        <>
            <h1>thêm Tour</h1>
            <Formik initialValues={{
                title:"",
                price:"",
                description:""
            }}
            onSubmit={(e) =>{createTour(e)}}
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
                    <button className={'btn btn-primary'} type={'submit'}>Thêm mới</button>
                    <Link className={'btn btn-secondary'} to={'/'}>Huỷ</Link>
                    </div>
                </Form>

            </Formik>
        </>
    )
}