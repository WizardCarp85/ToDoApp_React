"use client"
import Link from 'next/link'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const SignUp = () => {
    useEffect(() => {
      AOS.init({ duration: 1200, once: false });
    }, []);
  return (
    <div className="signup mt-35 " data-aos="fade-up">
      <h1 className="signup text-5xl font-bold text-center mt-12">Join Pixel Planner Today 🚀</h1>
      <form className="flex flex-col items-center mt-10 gap-1">
        <div className="relative w-1/4 mb-4">
          <input
            type="text"
            placeholder="Username"
            className="border-2 border-gray-400 rounded-lg p-2 pl-10 w-full"
          />
          <img
            src="/username.png"
            alt="username Icon"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-6 h-6"
          />
        </div>
        <div className="relative w-1/4 mb-4">
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-gray-300 rounded-lg p-2 pl-10 w-full"
          />
          <img
            src="/password.png"
            alt="password Icon"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-6 h-6"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg p-2 w-1/4 text-2xl loginsubmit"
        >
          Sign Up
        </button>
      </form>
      <h3 className="text-white text-center m-3">Already have an account? <Link href="./login" className="text-sky-500 text">Login</Link></h3>
    </div>
  )
}

export default SignUp