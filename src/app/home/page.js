"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1100, once: false });
  }, []);

  return (
    <div className="flex flex-col text-white justify-center items-center">

      {/* Heading */}
      <div
        className="heading text-7xl text-sky-200 font-bold mt-80 mb-40"
        data-aos="fade-up"
      >
        <h1>🎮 Welcome to Pixel Planner!</h1>
      </div>

{/* Main Section */}
      <div
        className="info mt-60 mb-20 mr-60 ml-60 text-3xl text-center text-gray-300 flex flex-col gap-16"
        data-aos="fade-up"
      >
        <h3>
          ✨ Your ultimate quest to conquer chaos begins here. 🧠 Whether you’re
          battling deadlines or navigating daily dungeons, Pixel Planner is your
          loyal sidekick.
        </h3>
        <h3>
          ⚔️ Craft your perfect day, equip tasks like gear, and level up your
          productivity! 🎯 From epic goals to daily quests — plan it all, your
          way.
        </h3>
        <h3>🗡️🛡️ Let’s slay that to-do list, hero. Adventure awaits!</h3>
      </div>

{/* Redirecting Button */}
      <div
        className="start bg-[#004aad] hover:bg-[#007acc] text-white text-2xl font-semibold border-2 border-cyan-400 rounded-2xl px-10 py-4 mt-40 mb-60 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        data-aos="zoom-in"
      >
        <h1>
          <Link href="./create">Start Conquering Chaos 🚀</Link>
        </h1>
      </div>

{/* Extra info */}
      <h1
        className="text-5xl text-sky-400 font-bold"
        data-aos="fade-up"
      >
        ⚙️ Level Up With These Perks
      </h1>
      <div className="extrainfo m-20 text-3xl text-center" data-aos="fade-up">
        <ul className="space-y-10">
          <li>📅 Plan your missions.</li>
          <li>🎯 Complete your goals like a true champion.</li>
          <li>⚡ Stay on top of deadlines and conquer tasks.</li>
          <li>🛡️ Shield your productivity with smart planning.</li>
        </ul>
      </div>

{/* Reviews */}
      <div
        className="reviews bg-gray-800 p-8 rounded-lg shadow-lg text-center text-white mb-20 mt-50"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold">What Our Users Say</h2>
        <div className="mt-6 space-y-8">
          <div className="flex flex-col items-center">
            <p className="text-xl italic">
              "Pixel Planner has transformed the way I organize my day. It’s like
              having a personal sidekick!"
            </p>
            <h4 className="mt-2 text-lg font-semibold">WizardCarp</h4>
            <p className="text-sm text-gray-400">Software Engineer</p>
          </div>
        </div>
      </div>

{/* Community Section */}
      <div
        className="community bg-[#004aad] p-8 rounded-lg shadow-lg text-center text-white mb-20 mt-20"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-semibold">
          Join the Pixel Planner Community
        </h2>
        <p className="text-xl mt-4">
          Connect with other heroes, share your progress, and stay updated!
        </p>
        <div className="mt-6">
          <button className="community bg-[#007acc] hover:bg-[#0066b3] px-6 py-3 rounded-xl text-white text-lg font-semibold transition duration-300">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;