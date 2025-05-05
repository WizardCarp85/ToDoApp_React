import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="login mt-35 ">
      <h1 className="text-5xl font-bold text-center mt-12">Welcome Back 👋</h1>
      <form className="flex flex-col items-center mt-10 gap-1">
        <div className="relative w-1/4 mb-4">
          <input
            type="text"
            placeholder="Username"
            className="border-2 border-gray-400 rounded-lg p-2 pl-10 w-full"
          />
          <img
            src="/username.png"
            alt="username Icon"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-6 h-6"
          />
        </div>
        <div className="relative w-1/4 mb-4">
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-gray-300 rounded-lg p-2 pl-10 w-full"
          />
          <img
            src="/password.png"
            alt="password Icon"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-6 h-6"
          />
        </div>
        <button
          type="submit"
          className="signupsubmit bg-blue-500 text-white rounded-lg p-2 w-1/4 text-2xl"
        >
          Login
        </button>
      </form>
      <h3 className="text-white text-center m-3">Dont have an account? <Link href="./signup" className="text-sky-500 text-">Sign Up</Link></h3>
    </div>
  );
};

export default Login;
