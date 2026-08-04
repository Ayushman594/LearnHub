import Navbar from "../Components/Navbar"
import {useState} from "react"
import { useLocation } from "react-router-dom"
function ViewDetails() {
    const location=useLocation();
    const [moredetails,setMoreDetails]=useState([]);
    const [pricedetails,setPriceDetails]=useState([]);
    function handleMoreDetails() {
        if(location.state.courseName==="Web Development") {
            setMoreDetails([
                "HTML: The standard markup language for creating web pages.",
                "CSS: A style sheet language used for describing the presentation of a document written in HTML.",
                "JavaScript: A programming language that allows you to create dynamic and interactive web content.",
                "Front-end frameworks: Popular frameworks like React, Angular, or Vue.js that help streamline front-end development.",
                "Back-end development: Server-side programming languages like Node.js, Python, or PHP for building the back-end of web applications.",
            ]);
            setPriceDetails([
                "Basic Web Development Course: ₹199",
                "Full Stack Web Development Course: ₹499",
                "Advanced Web Development Course: ₹799",
            ]);
        }
        else if(location.state.courseName==="Data Science") {
            setMoreDetails([
                "Python: A versatile programming language widely used in data science for data manipulation, analysis, and machine learning.",
                "R: A programming language and environment specifically designed for statistical computing and graphics.",
                "Data visualization: Techniques and libraries (e.g., Matplotlib, Seaborn) for creating visual representations of data.",
                "Machine learning: Algorithms and techniques for building predictive models and extracting insights from data.",
                "Big data technologies: Tools like Hadoop and Spark for processing and analyzing large datasets.",
            ]);
            setPriceDetails([
                "Basic Data Science Course: ₹199",
                "Full Stack Data Science Course: ₹499",
                "Advanced Data Science Course: ₹799",
            ]);
        }else if(location.state.courseName==="Mobile App Development") {
            setMoreDetails([
                "iOS Development: Creating applications for Apple's iOS operating system using Swift or Objective-C.",
                "Android Development: Building applications for the Android platform using Java or Kotlin.",
                "Cross-platform Development: Using frameworks like React Native or Flutter to develop apps for multiple platforms.",
                "Mobile UI/UX Design: Designing intuitive and user-friendly interfaces for mobile applications.",
                "App Distribution: Publishing and managing mobile applications on app stores like the Apple App Store and Google Play Store.",
            ]);
            setPriceDetails([
                "Basic Mobile App Development Course: ₹199",
                "Full Stack Mobile App Development Course: ₹499",
                "Advanced Mobile App Development Course: ₹799",
            ]);
        }
    }
  return (
    <>
      <Navbar />
      <section className="view-details">
          <div className="course-img">
             <img src={location.state.courseImage} alt="Course Image" />
          </div>
          <div className="course-details">
            <h2 className="text-primary">{location.state.courseName}</h2>
            <p className="mt-2">{location.state.courseDescription}</p>

            {moredetails.length>0 && (
                <div className="more-details">
                    <h3 className="fs-4 mt-2 mb-1">You can learn:</h3>
                    <ul>
                        {moredetails.map((detail,index)=>(
                            <li key={index}>{detail}</li>   
                        ))}
                    </ul>
                </div>
            )}
            {pricedetails.length>0 && (
                <div className="price-details">
                    <h3 className="fs-4 mt-2 mb-1">Price Details:</h3>
                    <ul>
                        {pricedetails.map((price,index)=>(
                            <li key={index}>{price}</li>
                        ))}
                    </ul>
                </div>
            )}
            <p className="fw-bold">Register,login and Enroll now to start your learning journey!</p>
            <button className="btn btn-primary p-2 mt-2" onClick={handleMoreDetails}>view description</button>
          </div>
      </section>

    </>
  )
}

export default ViewDetails
