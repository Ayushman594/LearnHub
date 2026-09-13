import Navbar from "../Components/Navbar"
import {Link} from 'react-router-dom'
import './Form styles/formstyles.css'
import {useState} from 'react';
function Loginform() {
  const [toggle,setToggle]=useState(false);
  return (
    <>
      <Navbar/>
        <section className="login-section">
            <div className="login">
                  <h2 className="text-primary">Login </h2>
                  <form>
                    <div className="d-flex flex-column mb-3 gap-2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" className="form-control" name="email" required />
                    </div>
                    <div className="d-flex flex-column mb-3 gap-2">
                    <label htmlFor="password">Password:</label>
                    <div className="d-flex">
                    <input type={toggle?"text":"password"} id="password" className="form-control" name="password" required />
                    <button type="button" onClick={()=>setToggle(!toggle)}>{toggle?'👁️':'⌣'}</button>
                    </div>
                    </div>
                    <p>if you're an admin, then login here <Link to="/admin-login">Admin Login</Link></p>
                    <button type="submit" className="btn btn-primary p-2 mt-2">Login</button>
                  </form>
            </div>
        </section>            
    </>
  )
}

export default Loginform
