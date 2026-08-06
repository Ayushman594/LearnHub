import Navbar from '../Components/Navbar'
import services from '../Services/service';
import {useLocation} from 'react-router-dom'
import {useState,useEffect} from 'react'

function ReadBlogs() {
  const location = useLocation();
  const [showFullBlog, setShowFullBlog] = useState([]);
  

  useEffect(()=>{
    const specificBlogdata=async()=>{
        if(location.state.blogTitle=="How to Build a Developer Portfolio"){
           const response=await services.getData("DeveloperPortfolio");
           setShowFullBlog(response);
        }else if(location.state.blogTitle=="How LearnHub Helps You Learn Faster"){
           const response = await services.getData("LearnhubFeatures");
           setShowFullBlog(response);
        }else if(location.state.blogTitle=="Top Courses Every Beginner Should Start With"){
           const response = await services.getData("TopcoursesBlog");
           setShowFullBlog(response);
        }else if(location.state.blogTitle=="Top Web Development Trends in 2026"){
           const response = await services.getData("TopTrends");
           setShowFullBlog(response);
        }
    }
    specificBlogdata();
  },[])
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
       <div className="blog d-flex justify-content-center">
        <div className="blog-card">
          <img src={location.state.blogImage} alt="Blog" className="object-cover mb-4" />
          <h3 className="text-2xl font-bold mb-4">{location.state.blogTitle}</h3>
          <p className="text-gray-700">{location.state.blogDescription}</p>
            <p className="text-gray-700 mt-4">{showFullBlog.map((blogdata)=>{
                 return (
                    <p className="mt-4">{blogdata.content}</p>
                 )
            })}</p>

        </div>
        </div>
       
      </div>
    </>
  )
}

export default ReadBlogs
