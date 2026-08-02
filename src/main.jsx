import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Loginpage from './Forms/Loginform.jsx'
import Registrationpage from './Forms/Registrationform.jsx'
import Contactpage from './Pages/Contact-page.jsx'
import About from './Pages/About-page.jsx'
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
  path:"/register",
  element:<Registrationpage/>
}])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)
