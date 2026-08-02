import Navbar from '../Components/Navbar'

function Registrationform() {
  return (
    <>
      <Navbar/>
        <section className="registration-section">
            <div className="registration">
                  <h2 className="text-primary"> Registration </h2>
                    <form>
                    <div className="d-flex flex-column gap-2">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" className="form-control" name="name" required />
                    </div>
                    <div className="d-flex flex-column gap-2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" className="form-control" name="email" required />
                    </div>
                    <div className="d-flex flex-column gap-2">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" className="form-control" name="password" required />
                    </div>
                    <div className="d-flex flex-column gap-2">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" className="form-control" name="confirm-password" required />
                    </div>
                    <button type="submit" className="btn btn-primary p-2 mt-2">Register</button>
                  </form>
            </div>
        </section>
    </>
  )
}

export default Registrationform
