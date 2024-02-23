import Avatar from '@mui/material/Avatar';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import {useDispatch} from "react-redux";
import { logOut } from '../redux/authRedux';
const Dashboard = () => {
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(logOut());
  }
  return (
    <div>
      <div className="bg-primary text-white  py-5 absolute top-0 right-0 w-5/6">
        <div className='flex items-center justify-between'>
            <p>Dashboard <span>.</span></p>
            <div className='flex items-center justify-around w-1/5'>
            <Avatar>H</Avatar>
            <AdminPanelSettingsIcon/>
            <LogoutIcon onClick={handleClick}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
