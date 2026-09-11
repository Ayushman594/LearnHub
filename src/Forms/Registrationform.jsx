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
     const receivedData={
      "user_name":data.user_name,
      "user_email":data.user_email,
      "password":data.password,
      "confirm_password":data.confirm_password
     }
    const response = await service.addData("users",receivedData);
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
                {...register("user_name", {
                  required: "Name is Required",
                  pattern: {
                    value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                    message: "Name should contain only letters and spaces",
                  },
                })}
              
              />
              {errors.user_name ? (
              <p className="text-danger">{errors.user_name.message}</p>
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
              {...register("user_email", {
                required: "This field is mandatory",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            
            />
            {errors.user_email ? (
              <div style={{ color: "red" }}>{errors.user_email.message}</div>
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
               <input type="password" id="confirm-password" className="form-control" {...register("confirm_password",{required:"This field is mandatory",validate:(value, formValues) => value === formValues.password || "Passwords do not match" })} />
            {errors.confirm_password?<div style={{color:"red"}}>{errors.confirm_password.message}</div>:""}
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
