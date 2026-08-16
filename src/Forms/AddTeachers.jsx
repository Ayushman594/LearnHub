import AdminNavbar from "../Components/AfterLoginNavbar";
import { useForm } from "react-hook-form";
import services from "../Services/service";
import { useState, useEffect } from "react";
function AddTeachers() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [state, setState] = useState([]);

  function onSubmit(data) {
    const addData = async (data) => {
      const response = await services.addData("TeachersData", data);
      if (response) {
        alert("Teacher's Data Added successfully");
        setState((prev) => [...prev, response]);
      }
    };
    addData(data);
  }
   const handleDelete=async(id)=>{
       await services.deleteData("TeachersData",id);
       setState((prev) => prev.filter((teacher) => teacher.id !== id));
    }
  useEffect(() => {
    const fetchData = async () => {
      const response = await services.getData("TeachersData");
      setState(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <AdminNavbar name="Ayushman Choudhary" needDashboard={true} />
      <section className="pt-5 d-flex flex-column">
        <h5 className="text-center fs-3 text-primary">Add Teachers info</h5>

        <form
          className="border border-dark rounded p-4 mt-3 w-50 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="d-flex flex-column">
            <label htmlFor="id">Enter Teacher's ID</label>
            <input
              id="teacherId"
              placeholder="e.g. T001"
              {...register("teacherId", {
                required: "Teacher ID is required",
              })}
            />
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="name">Enter Teacher's Name</label>
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

          <div className="d-flex flex-column mt-2">
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
              required
            />
            {errors.email ? (
              <div style={{ color: "red" }}>{errors.email.message}</div>
            ) : (
              ""
            )}
          </div>

          <div className="d-flex flex-column mt-2">
            <label htmlFor="specialization">
              Enter Teacher's Specialization details
            </label>
            <input
              type="text"
              id="specialization"
              placeholder="e.g Experience and Subject they are good at teaching"
              {...register("message", { required: "This field is required" })}
            />
          </div>
          <button type="submit" className="btn mt-2 btn-primary">
            Submit
          </button>
        </form>
      </section>
      <section className="p-4 ">
        <table className="border w-50 mx-auto border-dark">
          <thead>
            <tr className="bg-dark text-light">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Specialization</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {state.map((li) => {
              return (
                <tr key={li.id}>
                  <td className="border border-dark ps-2 p-3">{li.teacherId}</td>
                  <td className="border border-dark ps-2">{li.name}</td>
                  <td className="border border-dark ps-2">{li.email}</td>
                  <td className="border border-dark ps-2">{li.message}</td>
                  <td className="border border-dark ps-2 pe-2 "><button className="btn btn-danger p-2" onClick={()=>handleDelete(li.id)}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default AddTeachers;
