import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import AreaChart from "@/components/areaChart";
import ColumnChart from "@/components/columnChart";
import PieChart from "@/components/pieChart";
import MultipleRadialbarChart from "@/components/multipleRadialbarChart";
import RadialbarChart from "@/components/radialbarChart";
import SingleAreaChart from "@/components/singleAreaChart";
import RightBoard from "@/components/rightBoard";
import NavBar from "@/components/navbar";
import CalendarComponent from "@/components/calendar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mood = useSelector((state) => state.mood.mood);
  return (
    <>
      <Head>
        <title>Financial Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div
        style={{
          display: "flex",
          height: "calc(100vh - 50px)",
          padding: "10px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "72%",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              height: "33%",
              padding: "0px 15px",
            }}
          >
            <AreaChart />
            <PieChart />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "22%",
              padding: "0px 15px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  backgroundColor: mood === "light" ? "white" : "#352D49",
                  borderRadius: "7px",
                  width: "32%",
                  height: "99%",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  borderRadius: "7px",
                }}
              >
                <SingleAreaChart />
              </div>
              <div
                style={{
                  backgroundColor: mood === "light" ? "white" : "#352D49",
                  borderRadius: "7px",
                  width: "32%",
                  height: "99%",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  borderRadius: "7px",
                }}
              >
                <SingleAreaChart />
              </div>
              <div
                style={{
                  backgroundColor: mood === "light" ? "white" : "#352D49",
                  borderRadius: "7px",
                  width: "33%",
                  height: "99%",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  borderRadius: "7px",
                }}
              >
                <SingleAreaChart />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              height: "48%",
              justifyContent: "space-between",
              padding: "0px 15px",
              paddingTop: "15px",
            }}
          >
            <div style={{ width: "38%", height: "100%" }}>
              <ColumnChart />{" "}
            </div>
            <div
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "48%",
                  backgroundColor: "#352D49",
                  borderRadius: "7px",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                {/* <RadialbarChart />
                <RadialbarChart />
                <RadialbarChart /> */}
                <MultipleRadialbarChart />
              </div>
              <div
                style={{
                  width: "100%",
                  height: "48%",
                  backgroundColor: "#352D49",
                  borderRadius: "7px",
                }}
              >
                {/* <CalendarComponent /> */}
              </div>
            </div>
          </div>
          {/* 
        <MultipleRadialbarChart />
        <RadialbarChart /><ColumnChart /> */}
        </div>
        <RightBoard />
      </div>
    </>
  );
}
