import {  NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import UploadIcon from '@mui/icons-material/Upload';    
const Menu = () => {
  return (
    <div>
        <div className="w-1/6 h-screen bg-primary text-white flex  absolute left-0 top-0">
            <div className="flex flex-col align-center ">
                <img src='https://cdn2.vectorstock.com/i/1000x1000/26/81/red-grunge-cinema-logo-vector-4492681.jpg' className="h-20 w-64 object-cover"/>
                
                <div className="h-1/2 flex flex-col items-center justify-between mt-20 ">
                    <NavLink to="/">
                    <HomeIcon/>
                    Home
                    <hr />
                    </NavLink>
                <NavLink to="/users">
                <PeopleIcon/>
                    Users
                    <hr />
                </NavLink>
                <NavLink to="/upload">
                <UploadIcon/>
                    Upload
                    <hr />
                </NavLink>
                {/* <p>
                    <HomeIcon/>
                    Home
                    <hr />
                    </p>
                <p>
                    <PeopleIcon/>
                    Users
                    <hr />
                    </p>
                <p>
                    <UploadIcon/>
                    Upload
                    <hr />
                    </p> */}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu