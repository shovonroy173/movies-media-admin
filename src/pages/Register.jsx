import { useState } from "react";
// import {login} from "log-func";
import {useDispatch} from "react-redux";
import { register } from "../redux/apiCalls.js";
import {useNavigate} from "react-router-dom";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import app from "../firebase.js";

const Register = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);
  const dispatch = useDispatch();
  const handleClick = ()=>{
    // console.log("ok");
    register(dispatch , {name , email , password , isAdmin} );
  };
  const navigate = useNavigate();
  const handleRedirect = ()=>{
    // console.log("ok");
    navigate("/login")
  }
  return (
    <div className="relative">
      <div className="absolute inset-x-1/3 top-20 ">
        <div className="flex flex-col justify-between h-96">
          <p className="">Sign Up</p>
          <input
            type="text"
            placeholder="Name.."
            className=""
            name="name"
            onChange={((e)=>(setName(e.target.value)))}
          />
          <input
            type="text"
            placeholder="Email.."
            className=""
            name="name"
            onChange={((e)=>(setEmail(e.target.value)))}
          />
          <input
            type="password"
            placeholder="Password.."
            className="registerInput"
            name="genre"
            onChange={((e)=>(setPassword(e.target.value)))}
          />

        <button className="" onClick={handleClick} >
          Sign Up
        </button>
        <button className="" onClick={handleRedirect} >
          Already registerd? Click here to login.
        </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
