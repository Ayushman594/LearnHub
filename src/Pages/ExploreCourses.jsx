import { useEffect, useState } from "react";
import services from "../Services/service.jsx";
import { useNavigate } from "react-router-dom";
import "./Page styles/Explore-courses.css";
import AdminSidebar from "../Components/AdminSidebar.jsx";

function ExploreCourses() {
  const Navigate = useNavigate();
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await services.getData("Courses");
      setCourseData(response);
    };
    fetchCourses();
  }, []);

  // async function searchData(title, endpoint, key) {
  //   if (title.trim() === "") {
  //     const response = await services.getData(endpoint);
  //     setCourseData(response);
  //     return;
  //   }

  //   const response = await services.searchData(title, endpoint, key);
  //   setCourseData(response);
  // }

  const handleDelete = async (endpoint,id) => {
    await services.deleteData(endpoint, id);
    setCourseData((prev) => prev.filter((course) => course.id != id));
  };

  return (
    <>
      <section className="d-flex">
        <AdminSidebar />
        <div className="w-100 pt-5">
          <h3 className="text-primary text-center">Edit Courses</h3>

          <div className="d-flex searchaddcontainer justify-content-between w-100">
            <input
              type="search"
              placeholder="search courses"
              onChange={async (e) => {
                const title = e.target.value;

                if (title.trim() === "") {
                  const data = await services.getData("Courses");
                  setCourseData(data);
                  return;
                }

                const data = await services.searchData(title,"Courses");
                setCourseData(data);
              }}
              className="mt-4 ms-5 p-2  form-control"
            />

            <button
              className="btn addcoursebtn btn-primary mt-4 me-5 p-2"
              onClick={() => Navigate("/add-course")}
            >
              {" "}
              + Add New Course
            </button>
          </div>
          <div className="mt-4 allcoursescontainer">
            {courseData.map((data) => {
              return (
                <div className="course-card">
                  <img
                    src={data.courseImg}
                    className="w-100"
                    alt="course images"
                  />
                  <h3 className="text-primary mt-2">{data.courseName}</h3>
                  <p>{data.Course_desc}</p>
                  <p className="text-center fw-bold fs-5 mt-2">
                    Enrollment fee: {data.fees}
                  </p>

                  <div className="d-flex justify-content-around mt-2">
                    <button className="btn btn-success p-2">Edit</button>
                    <button
                      className="btn btn-danger p-2"
                      onClick={() => handleDelete("Courses",data.Courseid)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ExploreCourses;
