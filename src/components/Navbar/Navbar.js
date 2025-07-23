"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user] = useAuthState(auth);
  const router = useRouter();
  return (
    <div className="flex flex-row justify-around tracking-wide">
      {/* Logo */}
      <div className="logo fixed md:flex z-100 md:justify-between md:items-center top-0 bg-[#0F0F0F]/94 h-[70px] md:h-[5.3em] pt-1 pl-3 md:pl-2 flex justify-between w-full border-b-2 border-[#484848] shadow-sm shadow-[#424242]">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold scale-[0.7]"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="md:h-10 md:w-10"
          />
          <span className="logo-text text-[2em] md:text-[2.8rem] pt-1">
            Pixel Planner
          </span>
        </Link>
        {/* desktop navbar */}
        <div className="hidden md:flex md:gap-20 text-[1.3rem] md:text-lg text-[#b0b0b0] font-semibold md:pr-10 tracking-wider">
          <Link
            href="/home"
            className="hover:scale-[1.1] transition-transform duration-[400ms] ease-in-out hover:text-blue-500 hover:translate-y-[-0.2em]"
          >
            Home
          </Link>
          <Link
            href= {user ? "/dashboard" : "/auth/sign-in"}
            className="hover:scale-[1.1] transition-transform duration-[400ms] ease-in-out hover:text-blue-500 hover:translate-y-[-0.2em]"
          >
            PlannerHub✨
          </Link>
          {user ? (
            <button
              className="hover:scale-[1.15] transition-transform duration-[400ms] ease-in-out hover:text-blue-500 text-blue-200 cursor-pointer  hover:translate-y-[-0.2em]"
              onClick={() => {auth.signOut(); router.push('/auth/sign-in')}}
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-10">
            <Link
              href="/auth/sign-in"
              className="hover:scale-[1.1] transition-transform duration-[400ms] ease-in-out hover:text-blue-500 text-blue-200 cursor-pointer tracking-wider hover:translate-y-[-0.2em]"
            >
              Login
            </Link>
            <Link href="auth/sign-up" className="text-blue-200 hover:text-blue-500 hover:scale-[1.1] transition-all duration-[400ms] ease-in-out tracking-wider hover:translate-y-[-0.2em] cursor-pointer">
            Sign Up
            </Link>
            </div>
          )}
        </div>
        {/* mobile navbar */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden pr-6 text-2xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {/* mobile navbar menu*/}
      <div
        className={`fixed right-0 z-50 md:hidden w-[60%] h-screen bg-[#262626]/94 rounded-l-3xl pl-5 transition-transform duration-500 ease-in-out border-[#aeaeae] border-t-3 border-l-3 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-left items-top h-screen pt-8 pl-1 rounded-l-3xl tracking-wider">
          <ul className="text-[#e8e8e8] text-xl leading-16 w-full">
            <li className="">
              <Link href="/home" onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-house mr-3"></i>Home
              </Link>
            </li>
            <li className="">
              <Link href={user ? "/dashboard" : "/auth/sign-in"} onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-chart-simple mr-3"></i>PlannerHub✨
              </Link>
            </li>
            <li className="text-blue-300">
              {user ? (
                <button onClick={() => {setMenuOpen(false); auth.signOut(); router.push('/auth/sign-in')}}>
                  <i className="fa-solid fa-user mr-3"></i>Logout
                </button>
              ) : (
                <div className="flex flex-col">
                  <Link href="/auth/sign-in" onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-user mr-3"></i>Login
                </Link>
                <Link href="/auth/sign-in" onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-user-plus mr-2"></i>Sign Up
                </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
