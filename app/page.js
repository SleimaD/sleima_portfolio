"use client"
import Image from "next/image";
import Link from "next/link";
// import { bagelFatOne } from "@/app/font";
import Contact from "./components/Contact";
import Maincontent from "./components/Maincontent";

export default function Home() {
  return (
    <main className=" w-[100vw]  h-screen  flex overflow-hidden gap-2 bg-[#111111]  ">
      <Contact />
      <Maincontent />
    </main>
  );
}
