"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ShowButton = () => {
  useEffect(() => {
    AOS.init({ duration: 1100, once: false });
  }, []);
  const [isRootPage, setIsRootPage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsRootPage(pathname === "/");
  }, [pathname]);

  if (!isRootPage) return null;

  return (
    <div className="bg-[#004aad] hover:bg-[#007acc] text-white text-5xl font-semibold border-2 border-cyan-400 rounded-2xl px-10 py-4 mt-80 w-full max-w-[400px] mx-auto text-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up">
      <h1>
        <Link href="/home">Get Started 🚀</Link>
      </h1>
    </div>
  );
};

export default ShowButton;