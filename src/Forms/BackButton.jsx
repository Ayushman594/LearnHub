import {useNavigate} from 'react-router-dom'

function BackButton() {
    const navigate = useNavigate();
  return (
    <>
     <div className="p-3">
       <button className="btn btn-primary back-button" onClick={() => navigate(-1)}><span className=" fw-bold">←</span></button>   
     </div> 
    </>
  )
}

export default BackButton
