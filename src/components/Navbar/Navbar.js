"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-row justify-around tracking-wide">
      {/* Logo */}
      <div className="logo fixed md:flex z-100 md:justify-between md:items-center w-[99.8%] top-0 bg-[#0F0F0F]/94 h-[70px] md:h-24 pt-1 pl-8 md:pl-2 flex justify-between border-b-2 border-[#484848]">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold scale-[0.9]"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="md:h-10 md:w-10"
          />
          <span className="logo-text text-[2em] md:text-[2.8rem] pt-1">Pixel Planner</span>
        </Link>
        {/* desktop navbar */}
        <div className="hidden md:flex md:gap-16 text-[1.3rem] text-[#b0b0b0] font-semibold md:pr-16 tracking-wider">
          <Link
            href="/home"
            className="hover:scale-[1.15] transition-transform duration-[400ms] ease-in-out hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            href="/create"
            className="hover:scale-[1.15] transition-transform duration-[400ms] ease-in-out hover:text-blue-500"
          >
            Create✨
          </Link>
          <Link
            href="/dashboard"
            className="hover:scale-[1.15] transition-transform duration-[400ms] ease-in-out hover:text-blue-500"
          >
            Dashboard
          </Link>
          <Link
            href="/login"
            className="hover:scale-[1.15] transition-transform duration-[400ms] ease-in-out hover:text-blue-500 text-blue-200"
          >
            Login
          </Link>
        </div>
        {/* mobile navbar */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden pr-12 text-2xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {/* mobile navbar menu*/}
      <div
        className={`fixed right-0 z-50 md:hidden w-[50%] h-screen bg-[#262626]/94 rounded-l-3xl pl-5 transition-transform duration-500 ease-in-out border-[#aeaeae] border-t-3 border-l-3 ${
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
              <Link href="/create" onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-square-plus mr-3"></i>Create
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-chart-simple mr-3"></i>Dashboard
              </Link>
            </li>
            <li className="text-blue-300">
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-user mr-3"></i>Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;