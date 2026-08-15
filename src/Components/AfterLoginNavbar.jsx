import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function AdminNavbar({ name}) {

    const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand ps-3 mt-2" to="#">{name}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mt-2 ms-3" id="navbarNav">
      <ul className="navbar-nav gap-3">
        <li className="nav-item mt-1">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item mt-1">
          <Link className="nav-link" to="#">Update Courses</Link>
        </li>
        <li className="nav-item mt-1">
          <Link className="nav-link" to="#">Update Blogs</Link>
        </li>
         <li className="nav-item mt-1">
          <Link className="nav-link" to="#">Add Teachers</Link>
        </li>
         <li className="nav-item mt-1">
          <Link className="nav-link" to="#">Add New Admin</Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary" onClick={()=>navigate('/admin-login')}>Log out</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default AdminNavbar
