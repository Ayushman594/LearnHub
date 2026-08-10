import Navbar from '../Components/Navbar.jsx'
import {useEffect,useState} from 'react'
import services from '../Services/service.jsx'


function ExploreCourses() {
    const [courseData,setCourseData]=useState([]);
    useEffect(()=>{
        const fetchCourses=async()=>{
            const response= await services.getData("CoursesList");
            setCourseData(response); 
        }
        fetchCourses();
    },[])


  return (
    <>
      <Navbar islogin={false}/>
      <section className="">
         <h3 className="text-primary text-center">Explore Courses</h3>

         <div>
            <input type="search"/>
         </div>
         <div className="mt-4 allcoursescontainer">
            {courseData.map((data)=>{
              return ( <div className="course-card w-25 h-50">
                  <img src={data.courseImg} className="w-100" alt="course images" />
                  <h3 className="text-primary mt-2">{data.coursetitle}</h3>
                  <p>{data.description}</p>
                  <p className='text-center fw-bold fs-5 mt-2'>Enrollment fee: {data.fee}</p>
                  <button className="enroll btn btn-success p-2 mt-2">Enroll now</button>
              </div>
              )
         })}
         </div>
         
      </section>
    </>
  )
}

export default ExploreCourses
