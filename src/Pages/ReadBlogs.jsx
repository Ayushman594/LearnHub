import Navbar from '../Components/Navbar'
import services from '../Services/service';
import {useLocation} from 'react-router-dom'
import {useState,useEffect} from 'react'
function ReadBlogs() {
  const [hidebutton,setHideButton]=useState(false);
  const location = useLocation();
  const [showFullBlog, setShowFullBlog] = useState([]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
       <div className="blog d-flex justify-content-center">
        <div className="blog-card">
          <img src={location.state.blogImage} alt="Blog" className="object-cover mb-4" />
          <h3 className="text-2xl font-bold mb-4">{location.state.blogTitle}</h3>
          <p className="text-gray-700">{location.state.blogDescription}</p>
           {showFullBlog && (
            <p className="text-gray-700 mt-4">{showFullBlog.map((blogdata)=>{
                 return (
                    <p className="mt-4">{blogdata}</p>
                 )
            })}</p>
          )}
           { !hidebutton && (
            <button className="btn btn-primary p-2 mt-2" onClick={()=>
                {
                    displaymoreBlog()
                    setHideButton(true)
                } 
            }>Read More</button> )
        }
        </div>
        </div>
       
      </div>
    </>
  )
}

export default ReadBlogs
