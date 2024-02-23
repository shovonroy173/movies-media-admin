import Menu from "../components/Menu";
import Dashboard from "../components/Dashboard";

const Users = () => {
  return (
    <div>
      <Menu />
      <Dashboard/>
      <div className="absolute inset-x-1/3 top-20 ">Users</div>
     
    </div>
  );
};

export default Users;
