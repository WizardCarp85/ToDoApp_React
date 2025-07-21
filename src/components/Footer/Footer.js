import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="footer h-fit py-4 md:h-fit flex flex-col md:gap-40 text-center text-[#F5F5F5]. border-t-1 border-[#cbcbcb] text-[0.7rem] md:text-[0.9rem] md:py-4 md:flex-row md:justify-baseline">
        <Link
          href="/"
          className="md:flex items-center gap-2 font-semibold scale-[0.8] hidden"
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
        <div className="flex flex-col justify-between items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <h3>Follow Us on</h3>
            <div className="flex gap-4 text-xl">
              <i className="fa-brands fa-twitter hover:text-blue-500 cursor-pointer"></i>
              <i className="fa-brands fa-facebook hover:text-blue-500 cursor-pointer"></i>
              <i className="fa-brands fa-instagram hover:text-pink-500 cursor-pointer"></i>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <h3 className="hover:text-blue-500 cursor-pointer">
              Terms and Conditions | Privacy Policy
            </h3>
            <h3 className="tracking-wider font-semibold">
              © 2025 Pixel Planner. All rights reserved.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
