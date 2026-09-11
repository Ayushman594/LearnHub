import logo from '../assets/Booklogo.png'
import { Link } from 'react-router-dom'
function AdminSidebar() {
  return (
    <>
      <section className="sidebar">
          <div className="d-flex pt-5 flex-wrap justify-content-center gap-2">
             <img src={logo} alt="LearnHub Logo" className="navbar-brand logo me-3"/>  
    <Link className="navbar-brand text-primary title text-decoration-none  fw-bold" to="/">LearnHub</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex flex-column text-light" id="navbarSupportedContent">
      <ul className="navbar-nav  gap-4 mb-2">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Update Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Add and view Teachers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">View Registered Students</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">View Feedbacks</Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary p-2">Log out</button>
        </li>
        </ul>
        </div>
      </section>
    </>
  )
}

export default AdminSidebar
