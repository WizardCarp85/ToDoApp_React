"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log({ e });
    }
  };
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <div className="signup flex flex-col items-center h-screen justify-center" data-aos="fade-up">
      <Link
        href="/home"
        className="absolute top-4 left-4 md:top-8 md:left-6 text-blue-400 hover:underline text-sm md:text-base"
      >
        ← Back to Home
      </Link>

      <h1 className="text-2xl md:text-4xl p-4 text-[#04A5FF] font-semibold tracking-wide md:pb-10">
        Join Pixel Planner Today🚀
      </h1>
      <form className="flex flex-col gap-4 w-[60%] md:w-[20%] text-blue-500">
        <div className="flex flex-row text-sm md:text-[1.1rem] border-2 border-gray-500 p-2 rounded-lg w-full">
          <span>
            <i className="fa-solid fa-user pr-2"></i>
          </span>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="md:text-[0.9rem] focus:outline-none focus:ring-0 text-gray-200 w-full"
          />
        </div>
        <div className="flex flex-row text-sm md:text-[1.1rem] border-2 border-gray-500 p-2 rounded-lg w-full">
          <span>
            <i className="fa-solid fa-key pr-2"></i>
          </span>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="md:text-[0.9rem] focus:outline-none focus:ring-0 text-gray-200 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-[#2B7FFF] rounded-lg py-1 text-white md:text-xl font-semibold tracking-wider cursor-pointer hover:bg-[#1A5BC9] transition-all duration-300"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </form>
      <div className="text-xs md:text-[0.8rem] pt-4">
        Already have an account?{" "}
        <Link href="./sign-in" className="text-blue-500">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Signup;
