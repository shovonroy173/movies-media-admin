import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Email = () => {
    const [email ,  setEmail] = useState("");

    const navigate = useNavigate();
    const handleClick = async()=>{
        const res = await axios.get(`https://movies-media-api.onrender.com/api/user/getuser/${email}`);
        (res.data.isAdmin) ? navigate("/login") : navigate("/failure")
    }

  return (
    <div className='flex justify-center items-center mt-16'>
        <input type="text" placeholder='Email' onChange={(e)=>(setEmail(e.target.value))} />
        <button onClick={handleClick}> Get Started </button>
    </div>
  )
}

export default Email