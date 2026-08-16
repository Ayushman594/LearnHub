import Navbar from '../Components/AfterLoginNavbar'
import services from '../Services/service'
import { useEffect,useState } from 'react'

function ViewLearners() {
    const [learners,setLearners]=useState([]);
    useEffect(()=>{
        const fetchdata=async()=>{
            const response = await services.getData("LearnersData");
            setLearners(response);
        }
        fetchdata();
    },[])
  return (
    <>
      <Navbar needDashboard={true}/>
      <section className="pt-4">
          <h5 className="text-center text-primary fs-3">View Learners</h5>
          <table className="mx-auto mt-4">
              <thead>
                  <tr className="bg-dark text-light">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                  </tr>
              </thead>

              <tbody>
                  {learners.map((li)=>{
                        return (
                            <tr>
                                <td className="border-dark border p-3">{li.name}</td>
                                <td className="border-dark border p-3">{li.email}</td>
                            </tr>
                        )
                  })}
              </tbody>
          </table>
      </section>
    </>
  )
}

export default ViewLearners
