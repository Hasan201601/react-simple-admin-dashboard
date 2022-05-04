import React from "react";
import Cards from "../Cards/Cards";
import BasicTable from "../Table/Table";
import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="main-dash">
      <h1>Dashboard</h1>
      <Cards />
      <h1>Recent Orders</h1>
      <BasicTable />
    </div>
  );
};

export default MainDash;
