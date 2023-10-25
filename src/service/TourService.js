import axios from "axios";
export const findAllTour = () => {
    return new Promise(resolve => {
        resolve(
            axios.get("http://localhost:3000/tuors").then(res =>{
                return res.data
            }).catch(() =>{
                return []
            })
        )
    })
}
export const findById = (id) =>{
    return new Promise(resolve => {
        resolve(
            axios.get("http://localhost:3000/tuors/" +id).then(res =>{
                return res.data
            }).catch(() =>{
                return {}
            })
        )
    })
}
export const DeleteStudentById = (id,navigate) =>{
    return new Promise(resolve => {
        resolve(
            axios.delete("http://localhost:3000/tuors/" + id).then(res =>{
                return navigate("/")
            }).catch(() =>{
                return navigate("/delete")
            })
        )
    })
}
export const SaveTour = (e,navigate) =>{
    return new Promise(resolve => {
        resolve(
            axios.post("http://localhost:3000/tuors",e).then(res =>{
                return navigate("/"), alert(" successfully!")
            }).catch(() =>{
                return navigate("/create")
            })
        )
    })
}
export const UpdateTour = (e,navigate,id) =>{
    return new Promise(resolve => {
        resolve(
            axios.put("http://localhost:3000/tuors/"+id,e).then(res =>{
                return navigate("/"),alert("update successfully!")
            }).catch(() =>{
                return navigate("/update")
            })
        )
    })
}