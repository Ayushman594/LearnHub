import AdminNavbar from "../Components/AfterLoginNavbar"
import {useForm} from 'react-hook-form'
import services from "../Services/service";
function AddCourse() {

  const {register, handleSubmit,formState:{errors}}=useForm();
  
  const sendData=async(data)=>{
      const response=await services.addData("CoursesList",data);
      if(response){
         alert("Course Successfully added");
      }
  }
  return (
    <>
     <AdminNavbar needDashboard={true}/>
     <section className="pt-4">
         <h3 className="text-primary text-center">Add New Course</h3>
         <form className="mx-auto mt-3 w-25" onSubmit={handleSubmit(sendData)}>
            <div className="d-flex flex-column mb-2">
             <label htmlFor="image-url">Image URL:</label>
             <input {...register("courseImg",{"required":"This field is mandatory"})} />
             {errors.url && (
                <p className="text-danger">{errors.url.required}</p>
             )}
            </div>
            <div className="d-flex flex-column mb-2">
                <label htmlFor="name">Enter Course Name:</label>
                <input {...register("coursetitle", {
                required: "Name is Required",
                pattern: {
                  value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                  message: "Name should contain only letters and spaces",
                },
              })} />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
             )}
            </div>
            <div className="d-flex flex-column mb-2">
                <label htmlFor="description">Describe course:</label>
                <textarea name="description" id="description" rows="3" cols="4" {...register("description",{"required":"This field is mandatory"})}></textarea>
                {errors.description && (
                <p className="text-danger">{errors.description.required}</p>
             )}
            </div>
            <div className="d-flex flex-column mb-2">
                <label htmlFor="fee">Fee</label>
                <input {...register("fee",{"required":"This field is mandatory"})} />
                {errors.fee && (
                <p className="text-danger">{errors.fee.required}</p>
             )}
            </div>

            <button className="btn btn-success">Add Course</button>
         </form>
     </section>
    </>
  )
}

export default AddCourse
