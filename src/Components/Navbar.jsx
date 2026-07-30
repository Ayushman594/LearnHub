import logo from '../assets/Booklogo.png'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-light p-1">
  <div className="nav-container container-fluid">
    <img src={logo} alt="LearnHub Logo" className="navbar-brand logo me-3"/>  
    <a className="navbar-brand text-primary title text-decoration-none  fw-bold" href="#">LearnHub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-4" id="navbarSupportedContent">
      <ul className="navbar-nav nav-links me-auto gap-4 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Explore Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        
      </ul>
      <ul className="navbar-nav nav-btns me-auto gap-4 mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="btn btn-primary login-btn" type="submit">Login</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary register-btn" type="submit">Register</button>
        </li>
      </ul>
      </div>
    </div>
</nav>
    </>
  )
}

export default Navbar
