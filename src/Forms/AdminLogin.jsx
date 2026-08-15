import Navbar from '../Components/Navbar';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const navigate=useNavigate();
    let registereddata={name:"Ayushman choudhary",email:"ayushmanchoudhary43@gmail.com",password:"Ayush@2002"};

    function onSubmit(data){
         if(
   data.email === registereddata.email &&
   data.password === registereddata.password
 ){ 

   navigate("/admin-dashboard",{
     state:{
       name:registereddata.name
     }
   })

 }else{

   alert("Invalid credentials")

 }
}
  return (
    <>
          <Navbar/>
          <section className="login-section">
            <div className="login">
                  <h2 className="text-primary">Admin Login</h2>
                  <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex flex-column gap-2">
                    <label htmlFor="email">Email:</label>
                    <input id="email" className="form-control" {...register("email",{required:"This field is mandatory",pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email address",
    }})} required />
      {errors.email?<div style={{color:"red"}}>{errors.email.message}</div>:""}
                    </div>
                    <div className="d-flex flex-column gap-2">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" className="form-control" {...register("password",{required:"This field is mandatory",minLength: {
         value: 6, message: "Password must be at least 6 characters"}})} required />
                    {errors.password?<div style={{color:"red"}}>{errors.password.message}</div>:""}
                    </div>
                    <button type="submit" className="btn btn-primary p-2 mt-2">Login</button>
                  </form>
            </div>
        </section>
    </>
  )
}


export default AdminLogin
