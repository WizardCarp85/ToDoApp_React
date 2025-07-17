"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Invalid email or password. Please try again.");
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
      <h1 className="text-4xl md:text-5xl p-4 text-[#04A5FF] font-semibold tracking-wide md:pb-10">
        Welcome Back👋
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
            className="md:text-[0.9rem] focus:outline-none focus:ring-0 text-gray-200 w-full"
            onChange={(e) => setEmail(e.target.value)}
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
            className="md:text-[0.9rem] focus:outline-none focus:ring-0 text-gray-200 w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-[#2B7FFF] rounded-lg py-1 text-white md:text-xl font-semibold tracking-wider cursor-pointer hover:bg-[#1A5BC9] transition-all duration-300"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </form>
      <div className="text-xs md:text-[0.8rem] pt-4">
        Don&apos;t have an account?{" "}
        <Link href="./sign-up" className="text-blue-500">
          Sign Up
        </Link>{" "}
      </div>
    </div>
  );
};

export default Signin;
