import Navbar from '../Components/Navbar'

function AdminLogin() {
  return (
    <>
          <Navbar/>
          <section className="login-section">
            <div className="login">
                  <h2 className="text-primary">Admin Login</h2>
                  <form>
                    <div className="d-flex flex-column gap-2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" className="form-control" name="email" required />
                    </div>
                    <div className="d-flex flex-column gap-2">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" className="form-control" name="password" required />
                    </div>
                    <button type="submit" className="btn btn-primary p-2 mt-2">Login</button>
                  </form>
            </div>
        </section>
    </>
  )
}

export default AdminLogin
