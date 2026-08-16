import Navbar from "../Components/Navbar";
import service from "../Services/service.jsx";
import { useForm } from "react-hook-form";

function Registrationform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendData = async (data) => {
    const response = await service.addData("LearnersData",data);
    if(response){
      alert("Data Added Successfully. Now you can login");
    }
  };
  return (
    <>
      <Navbar />
      <section className="registration-section">
        <div className="registration">
          <h2 className="text-primary"> Registration </h2>
          <form onSubmit={handleSubmit(sendData)}>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                {...register("name", {
                  required: "Name is Required",
                  pattern: {
                    value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                    message: "Name should contain only letters and spaces",
                  },
                })}
              
              />
              {errors.name ? (
              <p className="text-danger">{errors.name.message}</p>
            ) : (
              ""
            )}
            </div>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="email">Email:</label>
             <input
              id="email"
              placeholder="e.g brijkumar@example.in"
              className="form-control"
              {...register("email", {
                required: "This field is mandatory",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            
            />
            {errors.email ? (
              <div style={{ color: "red" }}>{errors.email.message}</div>
            ) : (
              ""
            )}
            </div>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                {...register("password",{required:"This field is mandatory",minLength: {
         value: 6, message: "Password must be at least 6 characters"}})} />
         {errors.password?<div style={{color:"red"}}>{errors.password.message}</div>:""}

            </div>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="confirm-password">Confirm Password:</label>
               <input type="password" id="confirm-password" className="form-control" {...register("password",{required:"This field is mandatory",validate:(value, formValues) => value === formValues.password || "Passwords do not match" })} />
            {errors.password?<div style={{color:"red"}}>{errors.password.message}</div>:""}
            </div>
            <button type="submit" className="btn btn-primary p-2 mt-2">
              Register
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Registrationform;
