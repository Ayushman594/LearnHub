import Navbar from "../Components/Navbar"
import service from "../Services/service.jsx";
import '../Forms/Form styles/formstyles.css'
const sendData = async (data) => {
  const receivedData = {
    "name": data.name,
    "email": data.email,
    "phoneno": data.phoneno,
    "message": data.message
  }
  const response = await service.addData("Contact", receivedData);
  if (response) {
    alert("Message sent successfully. We will get back to you soon.");
  }
}

function Contactpage() {
  return (
    <>
      <Navbar/>
        <section className="contact-section">
            <div className="contact">
                <h2 className="text-primary">Contact Us </h2>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData);
                  sendData(data);
                }}>
                    <div className="d-flex flex-column mb-3 gap-2">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" className="form-control" name="name" required />
                    </div>
                    <div className="d-flex flex-column mb-3 gap-2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" className="form-control" name="email" required />
                    </div>
                    <div className="d-flex flex-column mb-3 gap-2">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" className="form-control" name="phoneno" required />
                    </div>
                    <div className="d-flex flex-column mb-3 gap-2">
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
