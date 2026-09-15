import { useEffect, useState } from "react"
import services from "../Services/service";
import AdminSidebar from "../Components/AdminSidebar";
import './Page styles/Admin-dashboard.css';


function AdminDashboard() {
  const [state,setState]=useState([]);
  const [Learners,setLearners]=useState([]);
  const [Teachers,setTeachers]=useState([]);
  const [query,setQuery]=useState([]);


  useEffect(()=>{
      const fetchdata=async()=>{

          const CourseResponse=await services.getData("Courses");
          setState(CourseResponse);
          const TeachersResponse=await services.getData("teachers");
          setTeachers(TeachersResponse);
          const response=await services.getData("users");
          setLearners(response);
          const queryResponse=await services.getData("Contact");
          setQuery(queryResponse);
      }
      fetchdata();
  },[]);
  return (
    <>
     
        <section className="d-flex">
         <AdminSidebar/>
          <div className="d-flex main-content flex-column align-items-start gap-5">
           <h3 className="fs-3 text-dark">Admin Dashboard</h3>

          <section className="d-flex gap-4 w-75 flex-wrap">
           <div className="border box p-5 border-dark rounded">
              <p className="fw-bold">No of Courses:</p>
              <p className="fs-2">{state.length}</p>
           </div>
           <div className="border box p-5 border-dark rounded">
              <p className="fw-bold">No of Learners:</p>
              <p className="fs-2">{Learners.length}</p>
           </div>
           <div className="border box p-5 border-dark rounded">
              <p className="fw-bold">No of teachers:</p>
              <p className="fs-2">{Teachers.length}</p>
           </div>
           <div className="border box p-5 border-dark rounded">
              <p className="fw-bold">Total Feedbacks:</p>
              {/* <p className="fs-2">{Teachers.length}</p> */}
           </div>
            <div className="border box p-5 border-dark rounded">
              <p className="fw-bold">No of Queries:</p>
              <p className="fs-2">{query.length}</p>
           </div>
           </section>
           </div>
        </section>
        
    </>
  )
}

export default AdminDashboard
