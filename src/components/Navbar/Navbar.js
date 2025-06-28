"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-row justify-around">
      <div className="navbar md:flex md:justify-between md:items-center absolute w-[99.8%] top-0 bg-[#0F0F0F]/60 h-[86px] md:h-24 pt-1 pl-8 md:pl-12 flex justify-between border-b-4 border-[#484848] rounded-b-xl">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#0091FF] font-semibold"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="md:h-12 md:w-12"
          />
          <span className="text-[2em] md:text-[3rem] pt-1">Pixel Planner</span>
        </Link>
        <div className="hidden md:flex md:gap-16 text-[1.6rem] text-[#D8D8D8] font-semibold md:pr-16">
          <Link href="/home">Home</Link>
          <Link href="/create">Create✨</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden pr-12 text-2xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div
        className={`fixed right-0 z-50 md:hidden w-[70%] h-screen bg-[#0c0c0c] rounded-l-3xl pt-8 pl-10 transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-left items-top h-screen pt-8 pl-3 bg-[#0c0c0c] rounded-l-3xl">
          <ul className="text-[#e8e8e8] text-2xl leading-16 w-full mr-14">
            <li className="border-b-2 border-dotted">
              <Link href="/home">
                <i className="fa-regular fa-square-caret-right pr-3"></i>Home
              </Link>
            </li>
            <li className="border-b-2 border-dotted">
              <Link href="/create">
                <i className="fa-regular fa-square-caret-right pr-3"></i>
                Create✨
              </Link>
            </li>
            <li className="border-b-2 border-dotted">
              <Link href="/dashboard">
                <i className="fa-regular fa-square-caret-right pr-3"></i>
                Dashboard
              </Link>
            </li>
            <li className="border-b-2 border-dotted">
              <Link href="/login">
                <i className="fa-regular fa-square-caret-right pr-3"></i>Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
