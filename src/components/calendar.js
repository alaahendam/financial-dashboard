import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
export default function CustomCalendar() {
  const [date, setDate] = useState(new Date());
  const mood = useSelector((state) => state.mood.mood);
  return (
    <div
      style={{
        color: mood === "light" ? "#352D49" : "white",
        width: "100%",
        backgroundColor: mood === "light" ? "white" : "#352D49",
        borderRadius: "7px",
      }}
    >
      <style>
        {`
        .react-calendar__month-view__days__day--neighboringMonth {
          color: gray;
        }
        .react-calendar__month-view__days__day--weekend {
          color: blue;
          
        }
        .react-calendar__month-view__days__day--today {
          color: green;
          font-weight: bold;
        }
        .react-calendar__month-view__days__day--active {
          background-color: lightgray;
          color: white;
        }
        .react-calendar__month-view__days__day {
          color: ${mood === "light" ? "#352D49" : "white"};
        }
        .react-calendar {
          background-color: ${mood === "light" ? "white" : "#352D49"};
          width:100%;
          border:none;
          border-radius:7px;
          
        }
        .react-calendar__navigation button {
          color:${mood === "light" ? "#352D49" : "white"};
        }
        .react-calendar__navigation button:enabled:hover, .react-calendar__navigation button:enabled:focus {
          background-color: ${mood === "light" ? "#A68BEF" : "white"};
          color: ${mood === "light" ? "white" : "#352D49"};
      }
        .react-calendar__year-view__months__month{
          color:${mood === "light" ? "#352D49" : "white"};
        }
        .react-calendar__tile:enabled:hover{
          background-color: ${mood === "light" ? "#A68BEF" : "white"};
          color:${mood === "light" ? "white" : "#352D49"};
        }
        .react-calendar__tile--active {
          background: ${mood === "light" ? "#A68BEF" : "white"};
          color: ${mood === "light" ? "white" : "#352D49"};
      }
        .react-calendar__tile--active:enabled:focus {
          background: ${mood === "light" ? "#A68BEF" : "white"};
        }
      `}
      </style>
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>
      {/* <div>Selected date: {date.toDateString()}</div> */}
    </div>
  );
}
