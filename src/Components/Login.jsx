// import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import pvsIcon from "../assets/pvsIcon.svg";
import emailIcon from "../assets/mail-01.svg";
import lockIcon from "../assets/square-lock-password.svg";
// import salesIcon from "../assets/salesIcon.svg";
// import bgImage from "../assets/pvsBg.jpg";

const Login = () => {
  return (
   <div className="grid place-items-center h-[100vh] gradient-container">
      <div className="bg-white lg:w-[50vw] lg:h-[80vh] sm:w-[70vw] sm:h-[80vh] w-[80vw] h-[80vh] lg:px-[5vw] lg:py-[5vw] sm:px-[5vw] sm:py-[5vw] px-[3vw] pt-[10vh] flex flex-col rounded-lg shadow-md">
         
      <div className="flex items-center justify-center">
          <img src={pvsIcon} alt="PVSIcon" className="h-10" />
      </div>

      <h2 className="text-md text-center text-[#424341] mt-3 sm:mt-5 lg:mt-8">Login Your Account</h2>

      <h3 className="text-sm text-center text-[#848484] pb-6">Lorem Ipsum is simply dummy text of the printing.</h3>

      <form className="space-y-4">

          {/* Email Field */}
            <div className="relative flex gap-x-3 shadow-lg p-4 rounded-lg bg-white border border-3xl">
              {/* Icon Container */}
              <div className="flex items-center justify-center px-2 rounded-lg bg-gradient-to-t from-[#CAF1F2] to-[#F1FEFF]">
                <img src={emailIcon} alt="PVSIcon" className="w-6" />
              </div>
              {/* Input Container */}
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-[#51534F]">
                  Email ID
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full py-1 rounded-lg focus:ring focus:ring-[#F1FEFF] outline-none text-sm text-[#9DA0A7]"
                  placeholder="Enter Email ID"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative flex gap-x-3 shadow-lg p-4 rounded-lg bg-white border border-3xl">
              {/* Icon Container */}
              <div className="flex items-center justify-center px-2 rounded-lg bg-gradient-to-t from-[#CAF1F2] to-[#F1FEFF]">
                <img src={lockIcon} alt="PVSIcon" className="w-6" />
              </div>
              {/* Input Container */}
              <div className="flex-1">
                <label htmlFor="password" className="block text-sm font-medium text-[#51534f]">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full py-1 rounded-lg focus:ring focus:ring-[#F1FEFF] outline-none text-sm text-[#9DA0A7]"
                  placeholder="Enter Password"
                />
              </div>
            </div>

         
          {/* Submit Button */}
          <div className="drop-shadow-md">
            <Link to="/dashboard">
              <button
                type="submit"
                className="w-full p-3 text-xs md:text-md  bg-gradient-to-b from-teal-400 to-teal-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none shadow-lg"
              >
                LOGIN
              </button>
            </Link>
          </div>
        </form>

      </div>
   </div>
  )
}

export default Login;


{/* <div className="grid place-items-center h-[100vh]">
      <div className="bgGradient w-[50vw] h-[50vh]"></div>
</div> */}