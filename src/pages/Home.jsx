import React from "react";
import Menu from "../components/Menu";
import Dashboard from "../components/Dashboard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Home = () => {
  return (
    <div>
      <Menu />
      <Dashboard />
      <div className=" absolute inset-x-1/3 top-28  flex flex-col justify-around items-center">
        <div className="flex justify-evenly items-center">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              Total movies: well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              Total Users: well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </CardContent>
          </Card>
        </div>
        <div>
          <h1>Movies by category</h1>
        </div>
        <div className="flex justify-evenly items-center">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              Total movies: well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              Total Users: well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
