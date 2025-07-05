"use client";
import Link from "next/link";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);
  return (
    <div>
      {/* heading */}
      <div
        className="heading flex items-center justify-center mt-[6em] mb-[2em] md:mt-[12em] md:mb-[5em] tracking-wide"
        data-aos="fade-up"
      >
        <h1 className="heading-text text-3xl md:text-[2.5rem] font-semibold md:font-bold text-[#e2e2e2] font-['Playfair_Display']">
          What&apos;s Pixel Planner?
        </h1>
      </div>
      {/* info */}
      <div
        className="info flex flex-col items-center justify-center text-[#D1D5DB] mx-[3em] text-center gap-8 mb-[8em] text-md md:text-lg md:mx-[20em] md:gap-12"
        data-aos="fade-up"
      >
        <p className="info-text">
          Your journey to conquer chaos starts now. Whether you&apos;re managing
          deadlines or organizing your day, Pixel Planner is your smart and
          reliable sidekick 🛠️.
        </p>
        <p className="info-text">
          Plan your perfect day, structure tasks like essential tools ⚙️, and
          take control of your productivity. From long-term goals to daily
          priorities — organize it all, your way ✅.
        </p>
        <p className="info-text">
          Let&apos;s simplify your workflow and unlock your full potential 🚀.
        </p>
      </div>
      {/* extrainfo */}
      <div className="extrainfo" data-aos="fade-up">
        <h1 className="text-2xl md:text-4xl text-center md:mb-20 text-sky-500 font-bold font-['Playfair_Display']">
          ⚙️ Level Up With These Perks
        </h1>
        <div className="my-12 mx-8 text-md md:text-lg text-center">
          <ul className="space-y-3 md:space-y-5">
            <li>📅 Plan your missions.</li>
            <li>🎯 Complete your goals like a true champion.</li>
            <li>⚡ Stay on top of deadlines and conquer tasks.</li>
            <li>🛡️ Shield your productivity with smart planning.</li>
          </ul>
        </div>
      </div>
      {/* redirect button */}
<div
  className="redirect bg-[#004aad] hover:bg-[#007acc] border-2 border-cyan-400 rounded-xl py-2 px-3 md:px-8 md:py-3 text-center text-sm md:text-xl font-semibold hover:scale-105 mx-auto my-20 w-fit"
  data-aos="zoom-in-up"
>
  <h1>
    <Link href="/create">Start Conquering Chaos 🚀</Link>
  </h1>
</div>

      {/* reviews */}
      <div
        className="reviews bg-gray-800 py-4 px-4 md:px-8 rounded-lg shadow-lg text-center text-white mt-20 mx-12 mb-20 md:mx-[24em] md:my-[8em] "
        data-aos="zoom-in"
      >
        <h2 className="text-md md:text-2xl font-semibold">
          What Our Users Say
        </h2>
        <div className="mt-6 space-y-8">
          <div className="flex flex-col items-center">
            <p className="text-xs md:text-lg italic">
              &quot;Pixel Planner has transformed the way I organize my day.
              It&apos;s like having a personal sidekick!&quot;
            </p>
            <h4 className="mt-2 text-md font-semibold">WizardCarp</h4>
            <p className="text-xs text-gray-400">Software Engineer</p>
          </div>
        </div>
      </div>
      {/* Community Section*/}
      <div
        className="community bg-[#004aad] p-6 rounded-lg shadow-lg text-center text-white mb-20 mt-20 mx-12 md:mx-[24em]"
        data-aos="zoom-in"
      >
        <h2 className="text-md md:text-2xl font-semibold">
          Join the Pixel Planner Community
        </h2>
        <p className="text-xs md:text-lg mt-4">
          Connect with other heroes, share your progress, and stay updated!
        </p>
        <div className="mt-6">
          <button className="community bg-[#007acc] hover:bg-[#0066b3] px-4 py-2 md:px-6 md:py-3 rounded-xl text-white text-sm md:text-md font-semibold transition duration-300">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
