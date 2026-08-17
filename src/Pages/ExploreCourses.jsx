import Navbar from '../Components/AfterLoginNavbar.jsx'
import {useEffect,useState} from 'react'
import services from '../Services/service.jsx'
import { useNavigate } from 'react-router-dom';

function ExploreCourses() {
    const Navigate=useNavigate();
    const [courseData,setCourseData]=useState([]);
    useEffect(()=>{
        const fetchCourses=async()=>{
            const response= await services.getData("CoursesList");
            setCourseData(response); 
        }
        fetchCourses();
    },[])

  async function searchData(title,endpoint,key){
      if (title.trim() === "") {
        const response = await services.getData(endpoint);
        setCourseData(response);
        return;
    }

    const response = await services.searchData(title, endpoint, key);
    setCourseData(response);
    
  }
   
  const handleDelete=async(id)=>{
      await services.deleteData("CoursesList",id);
      setCourseData((prev)=>prev.filter((course)=>course.id!=id));
  }
  
  return (
    <>
      <Navbar needDashboard={true}/>
      <section className="pt-5">
         <h3 className="text-primary text-center">Edit Courses</h3>

         <div className="d-flex justify-content-between">
            <input type="search" placeholder='search courses' onChange={(e)=>{
               searchData(e.target.value,"CoursesList","coursetitle")
            }} className="mt-4 ms-5 p-2 w-25 form-control"/>

            <button className="btn btn-primary mt-4 me-5 p-2 h-25" onClick={()=>Navigate("/add-course")}> + Add New Course</button>
         </div>
         <div className="mt-4 allcoursescontainer">
            {courseData.map((data)=>{
              return ( 
              <div className="course-card">
                  <img src={data.courseImg} className="w-100" alt="course images" />
                  <h3 className="text-primary mt-2">{data.coursetitle}</h3>
                  <p>{data.description}</p>
                  <p className='text-center fw-bold fs-5 mt-2'>Enrollment fee: ₹ {data.fee}</p>
                  

                  <div className="d-flex justify-content-around mt-2">
                     <button className="btn btn-success p-2">Edit course details</button>
                     <button className="btn btn-danger p-2" onClick={()=>handleDelete(data.id)}>Delete course details</button>
                  </div>
              </div>
              )
         })}
         </div>
         
      </section>
    </>
  )
}

export default ExploreCourses
