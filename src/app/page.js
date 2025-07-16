"use client";
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
      <div>
        <h1 className="text-4xl md:text-[3.5rem] font-semibold md:font-bold text-[#a8cfff] font-['Playfair_Display'] text-center mt-60">
          Welcome to Pixel Planner!
        </h1>
      </div>
      <div
        className="bg-[#004aad] hover:bg-[#007acc] text-[#e0e0e0] text-xl md:text-2xl font-semibold border-2 border-cyan-400 rounded-2xl md:px-10 px-6 py-3 mt-20 w-[60%] md:w-full max-w-fit mx-auto text-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        data-aos="zoom-in-up"
      >
        <h1>
          <Link href="/home" className="tracking-wider">
            Get Started 🚀
          </Link>
        </h1>
      </div>
    </>
  );
}
