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
        className="heading flex items-center justify-center my-[10em] md:my-[22em]"
        data-aos="fade-up"
      >
        <h1 className="text-3xl md:text-6xl font-semibold md:font-bold text-[#B7E6FE]">
          🎮 Welcome to Pixel Planner!
        </h1>
      </div>
      {/* info */}
      <div
        className="info flex flex-col items-center justify-center text-[#D1D5DB] mx-[3em] text-center gap-10 mb-[4em] text-lg md:text-3xl md:mx-[10em] md:gap-28"
        data-aos="fade-up"
      >
        <p>
          ✨ Your ultimate quest to conquer chaos begins here. 🧠 Whether you’re
          battling deadlines or navigating daily dungeons, Pixel Planner is your
          loyal sidekick.
        </p>
        <p>
          ⚔️ Craft your perfect day, equip tasks like gear, and level up your
          productivity! 🎯 From epic goals to daily quests — plan it all, your
          way.
        </p>
        <p>🗡️🛡️ Let’s slay that to-do list, hero. Adventure awaits!</p>
      </div>
      {/* redirect button */}
      <div
        className="redirect bg-[#004aad] hover:bg-[#007acc] border-2 border-cyan-400 rounded-xl my-[10em] mx-[6em] md:mx-[24em] md:py-3 px-4 py-2 text-center md:text-2xl font-semibold hover:scale-105"
        data-aos="zoom-in-up"
      >
        <h1>
          <Link href="/create">Start Conquering Chaos 🚀</Link>
        </h1>
      </div>
      {/* extrainfo */}
      <div className="extrainfo" data-aos="fade-up">
        <h1 className="text-2xl md:text-5xl text-center md:mb-20 text-sky-400 font-bold">
          ⚙️ Level Up With These Perks
        </h1>
        <div className="my-12 mx-8 text-lg md:text-2xl text-center">
          <ul className="space-y-5 md:space-y-10">
            <li>📅 Plan your missions.</li>
            <li>🎯 Complete your goals like a true champion.</li>
            <li>⚡ Stay on top of deadlines and conquer tasks.</li>
            <li>🛡️ Shield your productivity with smart planning.</li>
          </ul>
        </div>
      </div>
      {/* reviews */}
      <div
        className="reviews bg-gray-800 py-4 px-4 md:px-8 rounded-lg shadow-lg text-center text-white mt-20 mx-12 mb-20 md:mx-[24em] md:my-[8em] "
        data-aos="zoom-in"
      >
        <h2 className="text-xl md:text-3xl font-semibold">
          What Our Users Say
        </h2>
        <div className="mt-6 space-y-8">
          <div className="flex flex-col items-center">
            <p className="text-md md:text-xl italic">
              &quot;Pixel Planner has transformed the way I organize my day.
              It’s like having a personal sidekick!
            </p>
            <h4 className="mt-2 text-xl font-semibold">WizardCarp</h4>
            <p className="text-md text-gray-400">Software Engineer</p>
          </div>
        </div>
      </div>
      {/* Community Section*/}
      <div
        className="community bg-[#004aad] p-6 rounded-lg shadow-lg text-center text-white mb-20 mt-20 mx-12 md:mx-[24em]"
        data-aos="zoom-in"
      >
        <h2 className="text-xl md:text-3xl font-semibold">
          Join the Pixel Planner Community
        </h2>
        <p className="text-sm md:text-xl mt-4">
          Connect with other heroes, share your progress, and stay updated!
        </p>
        <div className="mt-6">
          <button className="community bg-[#007acc] hover:bg-[#0066b3] px-4 py-2 md:px-6 md:py-3 rounded-xl text-white text-md md:text-xl font-semibold transition duration-300">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
