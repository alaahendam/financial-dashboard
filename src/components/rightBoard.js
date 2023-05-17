import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const rightBoard = () => {
  const mood = useSelector((state) => state.mood.mood);
  return (
    <div
      style={{
        backgroundColor: mood === "light" ? "white" : "#352D49",
        color: mood === "light" ? "black" : "white",
        width: "28%",
        height: "100vh",
      }}
    ></div>
  );
};
export default rightBoard;
