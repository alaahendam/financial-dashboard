import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateChartsData } from "@/redux/features/chartsData";
export default function Layout({ children }) {
  const mood = useSelector((state) => state.mood.mood);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateChartsData());
    }, 2000); // Update the chart every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <main
        style={{
          backgroundColor: mood === "light" ? "#EFF0F6" : "rgb(38 32 54)",
          width: "100%",
        }}
      >
        {children}
      </main>
    </>
  );
}
