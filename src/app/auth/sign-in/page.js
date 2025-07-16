"use client";
import React from "react";
import Link from "next/link";

const Signin = () => {
  return (
    <div className="signup flex flex-col items-center mt-[10em] justify-center">
      <h1 className="text-4xl md:text-5xl p-4 text-[#04A5FF] font-semibold tracking-wide md:pb-10">
        Welcome Back👋
      </h1>
      <form className="flex flex-col gap-4 w-[60%] md:w-[20%] text-blue-500">
        <div className="text-sm md:text-[1.1rem] border-2 border-gray-500 p-2 rounded-lg w-full">
          <span>
            <i className="fa-solid fa-user pr-2"></i>
          </span>
          <input type="email" placeholder="Enter Your Email" required className="md:text-[0.9rem] focus:outline-none focus:ring-0 text-gray-200"/>
        </div>
        <div className="text-sm md:text-[1.1rem] border-2 border-gray-500 p-2 rounded-lg w-full">
          <span>
            <i className="fa-solid fa-key pr-2"></i>
          </span>
          <input type="password" placeholder="Enter Your Password" required className="md:text-[0.9rem] focus:outline-none focus:ring-0 text-gray-200"/>
        </div>
        <button
          type="submit"
          className="bg-[#2B7FFF] rounded-lg py-1 text-white md:text-xl font-semibold tracking-wider"
        >
          Sign Up
        </button>
      </form>
      <div className="text-xs md:text-[0.8rem] pt-4">
        Don't have an account?{" "}
        <Link href="./sign-up" className="text-blue-500">
          Sign Up
        </Link>{" "}
      </div>
    </div>
  );
};

export default Signin;
