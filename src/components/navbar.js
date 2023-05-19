import React from "react";
import { useSelector } from "react-redux";
const NavBar = () => {
  const mood = useSelector((state) => state.mood.mood);
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: mood === "light" ? "#EFF0F6" : "rgb(38 32 54)",
      }}
    ></div>
  );
};
export default NavBar;
