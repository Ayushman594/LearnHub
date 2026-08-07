import Navbar from '../Components/Navbar.jsx'

function AdminDashboard() {
  return (
    <>
     <header>
      <Navbar isLogin={true} isAdmin={true} isUser={false}/>
     </header>
    </>
  )
}

export default AdminDashboard
