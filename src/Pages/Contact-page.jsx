import Navbar from "../Components/Navbar"
function Contactpage() {
  return (
    <>
      <Navbar/>
        <section className="contact-section">
            <div className="contact">
                <h2 className="text-primary"> Contact Us </h2>
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
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" className="form-control" name="message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary p-2 mt-2">Submit</button>
                </form>
                {/* <p>We look forward to hearing from you and will respond to your message as soon as possible.</p> */}
            </div>
        </section>
    </>
  )
}

export default Contactpage
