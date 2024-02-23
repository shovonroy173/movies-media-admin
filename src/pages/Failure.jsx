import { useNavigate } from 'react-router-dom'

const Failure = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/register");
  }
  return (
    <>
    <div>You are not admin else you are not registered at all or as user!!</div>
    <p onClick={handleClick}>Register Now!!</p>
    </>
  )
}

export default Failure