import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CalendarComponent from "./calendar";
const rightBoard = () => {
  const mood = useSelector((state) => state.mood.mood);
  return (
    <div
      style={{
        color: mood === "light" ? "black" : "white",
        width: "28%",
        height: "100%",
        borderRadius: "7px",
        marginRight: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "20%",
          width: "100%",
          backgroundColor: mood === "light" ? "white" : "#352D49",
          borderRadius: "7px",
        }}
      ></div>
      <CalendarComponent />
      <div
        style={{
          height: "35%",
          width: "100%",
          backgroundColor: mood === "light" ? "white" : "#352D49",
          borderRadius: "7px",
        }}
      ></div>
    </div>
  );
};
export default rightBoard;
