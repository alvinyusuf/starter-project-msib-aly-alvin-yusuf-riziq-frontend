"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function AuthenticateForm() {
  const [login, setLogin] = useState(true);
  const handleLoginChange = () => {
    setLogin(!login);
  };

  return (
    <div className="">
      <h1 className="font-bold text-2xl text-gray-800">
        {login ? "Account Login" : "Account Signup"}
      </h1>
      <p className="text-gray-400 mt-4">
        {login
          ? "If you are already a member you can login with your email address and password"
          : "Become a member and enjoy exclusive promotions"}
      </p>
      <form action={login ? './profile' : '#'} method="post" className="flex flex-col mt-8">
        <label htmlFor="email" className="block">
          Email Address
        </label>
        <input
          type="email"
          name=""
          id="email"
          className="shadow border rounded py-2 px-3 mt-2 focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
        />
        <label htmlFor="password" className="block mt-4">
          Password
        </label>
        <input
          type="password"
          name=""
          id="password"
          className="shadow border rounded py-2 px-3 mt-2 focus:outline-none focus:shadow-outline"
          placeholder="Enter your password"
        />

        {!login ? (
          <>
            <label htmlFor="confirm" className="block mt-4">
              Confirm Password
            </label>
            <input
              type="password"
              name=""
              id="confirm"
              className="shadow border rounded py-2 px-3 mt-2 focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </>
        ) : null}

        <div className="flex items-center justify-center mt-6">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {login ? "Login" : "Sign up"}
          </button>
        </div>
        <div className="flex items-center justify-center mt-6">
          {login ? (
            <p className="text-gray-400">
              Dont have an account?{" "}
              <Link
                href="#"
                onClick={handleLoginChange}
                className="text-blue-700"
              >
                Sign up here
              </Link>
            </p>
          ) : (
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                href="#"
                onClick={handleLoginChange}
                className="text-blue-700"
              >
                Login here
              </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
