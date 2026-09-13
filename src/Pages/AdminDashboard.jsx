import { useEffect, useState } from "react"
import services from "../Services/service";
import AdminSidebar from "../Components/AdminSidebar";
import './Page styles/Admin-dashboard.css';
const CoursesList=[
    {
        "courseName":"Web Development",
         "courseDescription":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build responsive websites and gain practical skills to kickstart your career in web development.",
         "courseImage":"src/Images/Logoforwebdevelopmentcard.png",
         "courseId":"5Pp5S5-Ncew",
          "fee":"₹ 10,000"     
   },{
      "courseName":"Data Science",
      "courseDescription":"Master the art of data analysis and visualization. Learn how to work with large datasets, apply statistical techniques, and gain insights to make data-driven decisions.",
      "courseImage":"src/Images/LogoforDataScience.png",
      "courseId":"4qU6H8qI2iA",
      "fee":"₹ 15,000"
   },{
      "courseName":"Mobile App Development",
      "courseDescription":"Learn to build mobile applications for iOS and Android platforms. Gain hands-on experience with popular frameworks like React Native and Flutter, and create your own mobile apps.",
      "courseImage":"src/Images/MobileAppDevelopmentLogo.png",
      "courseId":"ZALFWdTe3xA",
      "fee":"₹ 12,000"
   },{
      "courseName":"Machine Learning",
      "courseDescription":"Dive into the world of machine learning and artificial intelligence. Learn algorithms, model training, and predictive analytics to develop intelligent systems.",
      "courseImage":"src/Images/MachineLearningLogo.png",
      "courseId":"xYxJbLpfX8w",
      "fee":"₹ 20,000"
   },{
      "courseName":"Cloud Computing",
      "courseDescription":"Explore cloud computing technologies and services. Learn how to deploy applications, manage infrastructure, and leverage cloud platforms for scalability and efficiency.",
      "courseImage":"src/Images/CloudComputingLogo.png",
      "courseId":"0M7QxJjAlnc",
      "fee":"₹ 18,000"
   },{
      "courseName":"Cybersecurity",
      "courseDescription":"Gain knowledge in cybersecurity principles and practices. Learn how to protect systems, networks, and data from cyber threats, and develop skills to secure digital assets.",
      "courseImage":"src/Images/CybersecurityLogo.png",
      "courseId":"3nK9R2vQ7mP",
      "fee":"₹ 16,000"
   },{
      "courseName":"UI/UX Design",
      "courseDescription":"Learn the art of user interface (UI) and user experience (UX) design. Understand design principles, wireframing, prototyping, and create visually appealing and user-friendly digital experiences.",
      "courseImage":"src/Images/UIUXDesignLogo.png",
      "courseId":"7Lk8H5pQ2rS",
      "fee":"₹ 14,000"
   }
];


function AdminDashboard() {
  const [state,setState]=useState([]);
  const [Learners,setLearners]=useState([]);
//   const [Teachers,setTeachers]=useState([]);
  const [query,setQuery]=useState([]);


  useEffect(()=>{
      const fetchdata=async()=>{
          setState(CoursesList);
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
              {/* <p className="fs-2">{Teachers.length}</p> */}
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
