import logo from '../assets/Booklogo.png'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const Navbar = (props) => {
  const navigate=useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-light ">
  <div className="nav-container container-fluid">
    <img src={logo} alt="LearnHub Logo" className="navbar-brand logo me-3"/>  
    <Link className="navbar-brand text-primary title text-decoration-none  fw-bold" to="/">LearnHub</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav nav-links  gap-4 mb-2">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        { props.isLogin && props.isUser && (
        <>  
          <li className="nav-item">
          <Link className="nav-link" to="/courses">Explore Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        </>)
        }

        { props.isLogin && props.isAdmin && (
        <>  
          <li className="nav-item">
          <Link className="nav-link" to="/edit-courses">Edit Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/edit-blogs">Edit Blogs</Link>
        </li>
        </>)
        }
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        
      </ul>
      {props.isLogin ? "" : <ul className="navbar-nav nav-btns me-auto gap-4 mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="btn btn-primary login-btn" type="submit" onClick={() => navigate('/login')}>Login</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary register-btn" type="submit" onClick={() => navigate('/register')}>Register</button>
        </li>
      </ul>}
      </div>
    </div>
</nav>
    </>
  )
}

export default Navbar
