import React from "react";
import { useSelector } from "react-redux";
import Login from "../screens/LoginScreen"; // Import your Login component

const Parent = () => {
  const userData = useSelector(state => state.user);

  return (
    <Login userData={userData} /> // Pass userData as props to Login
  );
};

export default Parent;
