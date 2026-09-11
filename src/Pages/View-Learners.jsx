import services from '../Services/service'
import { useEffect,useState } from 'react'
import AdminSidebar from '../Components/AdminSidebar';
function ViewLearners() {
    const [learners,setLearners]=useState([]);

    useEffect(()=>{
        const fetchdata=async()=>{
            const response = await services.getData("users");
            setLearners(response);
        }
        fetchdata();
    },[])

 const handleDelete=async(endpoint,id)=>{
     const conform=confirm("Do you want to delete data");
     if(conform==true){
     const response=await services.deleteData(endpoint,id);
     if(response){
         alert("Learner Deleted successfully");
     }
     setLearners((previous) =>
        previous.filter((learner) => learner.user_id !== id)
    );
    }
 }
  return (
    <>
      <section className="d-flex">
        <AdminSidebar/>
        <div className=" main-content">
          <h5 className="text-center text-primary fs-3">View Learners</h5>
          <table className="mx-auto mt-4">
              <thead>
                  <tr className="bg-dark text-light">
                    <th className="p-3">Learner Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3"></th>
                    <th className="p-3"></th>
                  </tr>
              </thead>

              <tbody>
                  {learners.map((li)=>{
                        return (
                            <tr>
                                <td className="border-dark border p-3">{li.user_name}</td>
                                <td className="border-dark border p-3">{li.user_email}</td>
                                <td className="border-dark border p-3"><button className="btn btn-primary p-2">Edit</button></td>
                                <td className="border-dark border p-3"><button className="btn btn-danger p-2" onClick={()=>handleDelete("users",li.user_id)}>Delete</button></td>
                            </tr>
                        )
                  })}
              </tbody>
          </table>
          </div>
      </section>
    </>
  )
}

export default ViewLearners
