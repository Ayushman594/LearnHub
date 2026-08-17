import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ViewLearners from './Pages/View-Learners.jsx'
import ExploreCourses from './Pages/ExploreCourses.jsx'
import AdminLogin from './Forms/AdminLogin.jsx'
import ReadBlogs from './Pages/ReadBlogs.jsx'
import AdminDashboard from './Pages/AdminDashboard.jsx'
import ViewDetails from './Pages/ViewDetails.jsx'
import Loginpage from './Forms/Loginform.jsx'
import Registrationpage from './Forms/Registrationform.jsx'
import Contactpage from './Pages/Contact-page.jsx'
import About from './Pages/About-page.jsx'
import Terms from './Pages/Terms.jsx'
import AddTeachers from './Forms/AddTeachers.jsx'
import AddCourse from './Forms/AddCourse.jsx'

const routes=createBrowserRouter([{
  path:"/",
  element:<App/>
},{
  path:"/about",
  element:<About/>
},{
  path:"/contact",
  element:<Contactpage/>
},{
  path:"/login",
  element:<Loginpage/>
},{
  path:"/view-details",
  element:<ViewDetails/>
},{
  path:"/register",
  element:<Registrationpage/>
},{
  path:"/terms",
  element:<Terms/>
},{
  path:"/read-blogs",
  element:<ReadBlogs/>
},{
  path:"/admin-login",
  element:<AdminLogin/>
},{
  path:"/admin-dashboard",
  element:<AdminDashboard/>
},{
  path:"/explore-courses",
  element:<ExploreCourses/>
},{
  path:"/add-teachers",
  element:<AddTeachers/>
},{
  path:"/view-learners",
  element:<ViewLearners/>
},{
  path:"/add-course",
  element:<AddCourse/>
}])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)
