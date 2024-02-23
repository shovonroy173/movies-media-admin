import axios from "axios";
import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./authRedux"

export const login = async(dispatch , user , data)=>{

    dispatch(loginStart());
    console.log(data);
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login" , user);
        console.log(res.data);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure())
    }
};

export const register = async(dispatch , user)=>{
    dispatch(registerStart());
    console.log(user);
    try {
        const res = await axios.post("http://localhost:5000/api/auth/register" , user);
        console.log(res.data);
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure())
    }
};