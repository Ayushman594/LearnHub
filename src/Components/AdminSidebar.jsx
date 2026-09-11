import logo from '../assets/Booklogowithoutbg.png';
import {Link, NavLink, useNavigate } from 'react-router-dom';

function AdminSidebar() {
  const navigate=useNavigate();
  return (
    <>
      <section className="sidebar flex-wrap">
        <div className="d-flex pt-5 flex-wrap justify-content-center gap-2">
          <img src={logo} alt="LearnHub Logo" className="navbar-brand logo me-3" />
          <Link className="navbar-brand text-primary title text-decoration-none fw-bold"  to="/">
            LearnHub
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex flex-column text-light" id="navbarSupportedContent">
          <ul className="navbar-nav gap-4 mb-2">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" end to="/admin-dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" end to="/explore-courses">
                Update Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  end to="/add-teachers">
                Add and view Teachers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" end to="/view-learners">
                View Registered Students
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" end to="#">
                View Feedbacks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" end to="#">
                View Queries
              </NavLink>
            </li> */}
            <li className="nav-item">
              <button className="btn btn-primary p-2" onClick={() => navigate('/admin-login')}>
                Log out
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AdminSidebar;
