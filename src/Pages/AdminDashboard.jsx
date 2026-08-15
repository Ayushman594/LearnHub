import AdminNavbar from "../Components/AfterLoginNavbar"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import services from '../Services/service.jsx'
function AdminDashboard() {
  const [state,setState]=useState([]);

  const location=useLocation();

  useEffect(()=>{
      const fetchdata=async()=>{
          const response=await services.getData("CoursesList");
          setState(response);
      }
      fetchdata();
  },[]);
  return (
    <>
        <AdminNavbar name={location.state.name}/>

        <section className="d-flex justify-content-center pt-5 gap-5">
           <div className="border p-5 border-dark rounded">
              <p className="fw-bold">No of Courses:</p>
              <p className="fs-2">{state.length}</p>
           </div>
           <div className="border p-5 border-dark rounded">
              <p className="fw-bold">No of Learners:</p>
              <p className="fs-2">{state.length}</p>
           </div>
           <div className="border p-5 border-dark rounded">
              <p className="fw-bold">No of teachers:</p>
              <p className="fs-2">{state.length}</p>
           </div>
        </section>
    </>
  )
}

export default AdminDashboard
