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

  async function searchData(title,endpoint,key){
      if (title.trim() === "") {
        const response = await services.getData(endpoint);
        setCourseData(response);
        return;
    }

    const response = await services.searchData(title, endpoint, key);
    setCourseData(response);
  }
  return (
    <>
      <Navbar islogin={false}/>
      <section className="pt-4">
         <h3 className="text-primary text-center">Explore Courses</h3>

         <div>
            <input type="search" placeholder='search courses' onChange={(e)=>{
               searchData(e.target.value,"CoursesList","coursetitle")
            }} className="mt-4 ms-5 p-2 w-25 form-control"/>
         </div>
         <div className="mt-4 allcoursescontainer">
            {courseData.map((data)=>{
              return ( 
              <div className="course-card ">
                  <img src={data.courseImg} className="w-100" alt="course images" />
                  <h3 className="text-primary mt-2">{data.coursetitle}</h3>
                  <p>{data.description}</p>
                  <p className='text-center fw-bold fs-5 mt-2'>Enrollment fee: {data.fee}</p>
                  <button className="enroll btn btn-success p-2 mt-3">Enroll now</button>
              </div>
              )
         })}
         </div>
         
      </section>
    </>
  )
}

export default ExploreCourses
