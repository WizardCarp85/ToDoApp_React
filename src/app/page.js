"use client"
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);
  return (
    <>
    <div className="bg-[#004aad] hover:bg-[#007acc] text-white text-2xl md:text-5xl font-semibold border-2 border-cyan-400 rounded-2xl md:px-10 py-4 mt-80 w-[60%] md:w-full max-w-[400px] mx-auto text-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105" data-aos="zoom-in-up">
      <h1>
        <Link href="/home">Get Started 🚀</Link>
      </h1>
    </div>
    </>
  );
}
