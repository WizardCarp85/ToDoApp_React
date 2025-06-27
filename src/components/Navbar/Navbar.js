"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="navbar absolute w-full top-0 bg-[#0F0F0F]/60 h-[86px] md:h-24 pt-1 pl-8 flex justify-between">
        <div className="flex items-center gap-2 text-[#0091FF] font-semibold">
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="md:h-12 md:w-12"
          />
          <span className="text-[2em] md:text-[3.4rem] pt-1">
            Pixel Planner
          </span>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden pr-12 text-2xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute right-0 z-50 md:hidden w-[70%]">
          <div className="flex justify-left items-top h-screen pt-8 pl-10 bg-[#0c0c0c] rounded-l-3xl">
            <ul className="text-[#e8e8e8] text-2xl leading-16 w-full mr-14">
              <li className="border-b-2 border-dotted">
                <Link href="/home">
                  <i className="fa-regular fa-square-caret-right pr-3"></i>Home
                </Link>
              </li>
              <li className="border-b-2 border-dotted">
                <Link href="/create">
                  <i className="fa-regular fa-square-caret-right pr-3"></i>
                  Create
                </Link>
              </li>
              <li className="border-b-2 border-dotted">
                <Link href="/dashboard">
                  <i className="fa-regular fa-square-caret-right pr-3"></i>
                  Dashboard
                </Link>
              </li>
              <li className="border-b-2 border-dotted">
                <Link href="/auth">
                  <i className="fa-regular fa-square-caret-right pr-3"></i>Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
