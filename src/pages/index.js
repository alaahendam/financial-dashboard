import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import AreaChart from "@/components/areaChart";
import ColumnChart from "@/components/columnChart";
import PieChart from "@/components/pieChart";
import MultipleRadialbarChart from "@/components/multipleRadialbarChart";
import RadialbarChart from "@/components/radialbarChart";
import RightBoard from "@/components/rightBoard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Financial Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flex: "72%",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <AreaChart />
        <ColumnChart />
        <PieChart />
        <MultipleRadialbarChart />
        <RadialbarChart />
      </div>
      <RightBoard />
    </>
  );
}
