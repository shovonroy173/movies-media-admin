import {  useState } from "react";
// import {login} from "log-func";
import {useDispatch} from "react-redux";
import { login } from "../redux/apiCalls.js";
import {useNavigate} from "react-router-dom";

// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import app from "../firebase.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleClick = ()=>{
    // console.log("ok");
    login(dispatch , {email , password} );
  };
  const navigate = useNavigate();
  const handleRedirect = ()=>{
    // console.log("ok");
    navigate("/register")
  }
  return (
    <div className="relative">
      <div className="absolute inset-x-1/3 top-20 ">
        <div className="flex flex-col justify-between h-96">
          <p className="">Sign In</p>
          <input
            type="text"
            placeholder="email"
            className=""
            name="name"
            onChange={((e)=>(setEmail(e.target.value)))}
          />
          <input
            type="password"
            placeholder="password"            className="registerInput"
            name="genre"
            onChange={((e)=>(setPassword(e.target.value)))}

          />

        <button className="" onClick={handleClick} >
          Sign In
        </button>
        <button className="" onClick={handleRedirect} >
          New here? Click here to register.
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
