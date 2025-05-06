"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);
  return (
    <div data-aos="fade-up">
            <h1 className='text-white text-5xl text-center m-60'>All created Tasks dashboard- Currently in progress</h1>
    </div>
  )
}

export default Dashboard