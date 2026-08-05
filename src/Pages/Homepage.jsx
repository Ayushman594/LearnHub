import { Link,useNavigate } from 'react-router-dom'
import {useEffect,useState} from 'react';
import API from '../Services/service.jsx'
import Navbar from '../Components/Navbar.jsx'




function Homepage() {
  const [ReasonsList,setReasonsList]=useState([]);
  const [coursesList,setCoursesList]=useState([]);
  const [BlogList,setBlogList]=useState([]);
  useEffect(()=>{
    const fetchReasons=async()=>{
       const response=await API.getData("ReasonsList");
       setReasonsList(response);
       const courseResponse=await API.getData("coursesList");
       setCoursesList(courseResponse);
       const blogListResponse=await API.getData("BlogList");
       setBlogList(blogListResponse);
    }
    fetchReasons();
  },[])
  const navigate=useNavigate();
  return (
    <>
        <Navbar />
        <section className="main-section">
          <h1 className="text-primary">Welcome to LearnHub</h1>
          <p className="fs-5">Your journey to learning starts here!</p>
        </section>

        <section className="whyLearnhub">
          <h2 className="text-center text-primary">Why LearnHub ?</h2>
          <div className="Reasonstoconnect">
              {
                 ReasonsList.map((reason)=>{
                  return (
                     <div className="Reason-container">
                      <div>
                        <img src={reason.logo} alt="logo" />
                     </div>
                      <h4>{reason.why}</h4>
                     </div>
                  )
                 })
              }
          </div>
        </section>
        <section className="courses-section">
          <h2 className="text-primary">Explore Our Courses</h2>
          <div className="courses-container d-flex justify-content-around">
          {coursesList.map((course)=>{
               return (
                <div className="course-card">
              <img src={course.imagesrc} alt="Web Development" />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="btn btn-primary p-2 mt-2" onClick={() => navigate('/view-details', { state: { courseImage: course.imagesrc, courseName: course.title, courseDescription: course.description } })}>
                View Details
              </button>
            </div>
               )
          })}
            
          </div>
        </section>

        <section className="Our-Blogs">
            <h2 className="text-primary text-center">Our Blogs</h2>
           <div className="Blog-container mt-5 justify-content-around">
              {
                BlogList.map((Blog)=>{
                  return (
                    <div className="Blog-card mt-4">
              <img src={Blog.blogimg} alt="Blogimage" />
              <h5>{Blog.uploaddate}</h5>
              <h3>{Blog.blogtitle}</h3>
              <p>{Blog.blogdescription}</p>
              <button className="btn btn-primary p-2 mt-2" onClick={() => navigate('/read-blogs', { state: { blogImage: Blog.blogimg, blogDate: Blog.uploaddate, blogTitle: Blog.blogtitle, blogDescription: Blog.blogdescription } })}>
                Read More
              </button>
            </div>
                  )
                })
              }
           </div>
        </section>
        <section className="Newsletter">
           <h3 className="fs-2 text-primary"> Newsletter</h3>
          <p className="pb-2 pt-2">Get latest updates of LearnHub</p>
          <input type="email" className="rounded p-2 d-inline form-control w-25" placeholder='Enter your Email' />
          <button className="btn btn-primary p-2 ms-1">Submit</button>
        </section>

        <footer className="d-flex flex-column">
        <section className="container">
          <div className="row">
            <div className="col">
            <h3 className="text-primary">LearnHub</h3>
            <p className="text-light mt-1 w-75">LearnHub is an online learning platform which offers various courses for Students. It is designed to help learners build in demand skills through structured courses.</p>
            </div>
            <div className="col">
              <h4 className="text-light">Explore</h4>
              <ul className="list-unstyled mt-2">
                <li>
                   <Link to="/about" className="text-light text-decoration-none">About</Link>
                </li>
                <li>
                   <Link to="/courses" className="text-light text-decoration-none">Courses</Link>
                </li>
                <li>
                   <Link to="/blogs" className="text-light text-decoration-none">Blogs</Link>
                </li>
                <li>
                   <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4 className="text-light">Our Terms</h4>
              <ul className="list-unstyled mt-2">
                <li>
                   <Link to="/terms" className="text-light text-decoration-none">Terms & conditions</Link>
                </li>
              </ul>
            </div>
            </div>
          </section>
          <p className="text-light text-center copyright">LearnHub ©2026 All Rights Reserved</p>
        </footer>
    </>
  )
}

export default Homepage
