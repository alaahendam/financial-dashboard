
import { useSelector } from "react-redux";

export default function Layout({ children }) {
    const mood = useSelector((state) => state.mood.mood);
  return (
    <>
      <main style={{ backgroundColor: mood === "light" ? "#EFF0F6" : "rgb(38 32 54)",width:'100%'}}>{children}</main>
    </>
  );
}