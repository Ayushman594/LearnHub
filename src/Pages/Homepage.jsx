import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar.jsx'
import './Page styles/Homepage.css'
const reasonsList = [
    {
      "logo": "src/Images/IndustryExpert.png",
      "why": "Learn from Industry Experts",
      "id": "_jmKGGkI_4E"
    },
    {
      "logo": "src/Images/HandsonProjects.png",
      "why": "Hands On projects",
      "id": "SLsF7bKetZI"
    },
    {
      "logo": "src/Images/Downloadable.png",
      "why": "Downloadable Resources",
      "id": "0M7QxJjAlnc"
    },
    {
      "logo": "src/Images/Certificates.png",
      "why": "Earn Certificates",
      "id": "xYxJbLpfX8w"
    }
  ]
  
const coursesList = [
    {
      "imagesrc": "src/Images/Logoforwebdevelopmentcard.png",
      "title": "Web Development",
      "description": "Learn to build modern web applications using HTML, CSS, and JavaScript.",
      "id": "5Pp5S5-Ncew"
    },
    {
      "imagesrc": "src/Images/LogoforDataScience.png",
      "title": "Data Science",
      "description": "Master data analysis, visualization, and machine learning techniques.",
      "id": "4qU6H8qI2iA"
    },
    {
      "imagesrc": "src/Images/MobileAppDevelopmentLogo.png",
      "title": "Mobile App Development",
      "description": "Create mobile applications for Android and iOS platforms using Flutter and React Native.",
      "id": "ZALFWdTe3xA"
    }
  ]


const BlogList = [
    {
      "blogimg": "src/Images/DeveloperPortfolio.png",
      "blogtitle": "How to Build a Developer Portfolio",
      "blogdescription": " A developer portfolio is your digital showcase that highlights your skills, projects, and experience. It helps recruiters and clients understand what you can build and how you solve real-world problems...",
      "uploaddate": "26-07-2026",
      "id": "P__aYWR8spg"
    },
    {
      "blogimg": "src/Images/LearnHub.png",
      "blogtitle": "How LearnHub Helps You Learn Faster",
      "blogdescription": "LearnHub is designed to make learning simple, practical, and effective. Explore structured courses, follow clear learning paths, and build real-world projects that strengthen your skills. Whether you're a beginner...",
      "uploaddate": "28-6-2026",
      "id": "3cwOWxw8tqM"
    },
    {
      "blogimg": "src/Images/TopCoursesBlog.png",
      "blogtitle": "Top Courses Every Beginner Should Start With",
      "blogdescription": "Starting your learning journey with the right courses builds a strong foundation for a successful career in technology. Focus on fundamental skills first, then gradually move toward advanced concepts and real-world projects...",
      "uploaddate": "29-6-2026",
      "id": "DVxJ_1CzcOI"
    },
    {
      "blogimg": "src/Images/TrendsBlog.png",
      "blogtitle": "Top Web Development Trends in 2026",
      "blogdescription": "Web development continues to evolve with new technologies that make websites faster, smarter, and more interactive. In 2026, developers are focusing on AI-powered tools, high-performance web applications, and enhanced user experiences...",
      "uploaddate": "30-6-2026",
      "id": "xVSYwAMZcow"
    }
  ];
function Homepage() {


  const navigate=useNavigate();
  return (
    <>
        <Navbar isLogin={false} />
        <section className="main-section d-flex flex-column align-items-center">
          <h1 className="text-primary">Welcome to LearnHub</h1>
          <p className="fs-5">Your journey to learning starts here!</p>
        </section>

        <section className="whyLearnhub p-5">
          <h2 className="text-center text-primary">Why LearnHub ?</h2>
          <div className="Reasonstoconnect d-flex justify-content-around">
              {
                 reasonsList.map((reason)=>{
                  return (
                     <div className="Reason-container">
                      <div>
                        <img src={reason.logo} className="mx-auto" alt="logo" />
                     </div>
                      <h4>{reason.why}</h4>
                     </div>
                  )
                 })
              }
          </div>
        </section>
        <section className="courses-section p-5">
          <h2 className="text-primary text-center">Explore Our Courses</h2>
          <div className="courses-container d-flex  mt-5 justify-content-around">
          {coursesList.map((course)=>{
               return (
                <div className="course-card border border-dark rounded p-3 px-auto">
              <img src={course.imagesrc}  alt="Web Development" />
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

        <section className="Our-Blogs p-5">
            <h2 className="text-primary text-center">Our Blogs</h2>
           <div className="Blog-container mt-5 justify-content-around">
              {
                BlogList.map((Blog)=>{
                  return (
                    <div className="Blog-card mt-1">
              <img src={Blog.blogimg} alt="Blogimage" />
              <h5 className="mt-2">{Blog.uploaddate}</h5>
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
        <section className="Newsletter p-5">
           <h3 className="fs-2 text-primary"> Newsletter</h3>
          <p className="pb-2 pt-2">Get latest updates of LearnHub</p>
          <input type="email" className="rounded p-2 d-inline form-control w-25" placeholder='Enter your Email' />
          <button className="btn btn-primary p-2 ms-1">Submit</button>
        </section>

        <footer className="d-flex flex-column p-5">
        <section className="container">
          <div className="row">
            <div className="col">
            <h3 className="text-primary">LearnHub</h3>
            <p className="text-light description mt-1 w-75">LearnHub is an online learning platform which offers various courses for Students. It is designed to help learners build in demand skills through structured courses.</p>
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
