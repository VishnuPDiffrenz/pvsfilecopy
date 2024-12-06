// import React from "react";
import { Link } from "react-router-dom";
import pvsIcon from "../assets/pvsIcon.svg";
import profile from "../assets/profile.png";
import salesIcon from "../assets/salesIcon.svg";
import crmIcon from "../assets/crmIcon.svg";
import settingsIcon from "../assets/settingsIcon.svg";
import bgImage from "../assets/pvsBg.jpg";
import crmImage from "../assets/crmImage.png";
import crmImageNew from "../assets/crmImageNew.png";
import crmImage1 from "../assets/crmImage1.png";

const TestDashboard = () => {

  const a = "sales";

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw] gradient-container">
      <div className="border border-[#D6D6D6] pb-6 px-10 rounded-lg bg-[#FFFFFF] mx-5 lg:w-[55vw]">
      <div className="text-center mb-2 pt-12">
        <img
          src={pvsIcon}
          alt="PVS Logo"
          className="h-10 mx-auto"
        />
        <h1 className="text-md font-semibold text-[#5F5F5F] mt-4 sm:mt-8">Welcome back, Mauro.</h1>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-[#EAFAFF] shadow-lg rounded-lg px-4 py-1 sm:mb-6 flex items-center space-x-4 border border-[#CBE2E4]">
          <img
            src={profile}
            alt="User Avatar"
            className="object-cover w-10 h-10 rounded-full"
          />
          <div className="mr-20">
            <p className="text-[#5F5F5F] font-medium text-xs">Mauro M. Smith</p>
            <p className="text-[#00969F] text-sm">Marketing Head</p>
          </div>
          <select className="ml-10 rounded-md p-2 text-gray-600 bg-[#EAFAFF]">
            {/* <option>Switch User</option>
            <option>Mauro M. Smith</option> */}
          </select>
        </div>

        <div className="mb-5 mt-5 flex items-center justify-center">
          <div className="bg-[#E4E4E4] h-[2px] w-[20vw] sm:w-[12vw] lg:w-[12vw]"></div>
          <h1 className="py-1 PX-1 border rounded-3xl text-xs w-[35vw] sm:w-[20vw] lg:w-[10vw] text-center text-slate-500">Choose your app</h1>
          <div className="bg-[#E4E4E4] h-[2px] w-[20vw] sm:w-[12vw] lg:w-[12vw]"></div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 sm:gap-x-1 sm:gap-y-5 sm:pb-8">
          <OptionCard
            title="Sales"
            icon={salesIcon}
          />
          <OptionCard
            title="CRM"
            icon={crmImage}
          />
          <OptionCard
            title="Settings"
            icon={settingsIcon}
          />
        </div>
      </div>
      </div>
    </div>
  );
};
// F6F6F6 E0EBEB
const OptionCard = ({ title, icon }) => {
  return (
    <div className="bg-white rounded-lg px-3 sm:px-5 lg:px-7 py-2 sm:py-5 text-center shadow-lg transition-shadow border border-[#E1E1E1] mx-5 flex flex-col">
      <div className="text-4xl mb-1 sm:mb-2 item-center flex justify-center items-center px-3 py-3 sm:px-5 sm:py-5 max-w-[50%] sm:max-w-[100%] mx-auto rounded-full bg-gradient-to-b from-[#F6F6F6] to-[#E0EBEB]">
        <img src={icon} alt="Icon" className="w-35 sm:w-12 lg:w-18"/>
      </div>
      <h2 className="text-sm sm:text-md text-[#5F5F5F]">{title}</h2>
      <div className="mt-3 sm:mt-4">
        <Link to="/sales">
          <button className="px-5 py-1 bg-[#EAFAFF] text-[#067C83] hover:text-[#EAFAFF] rounded-md hover:bg-[#00969F] duration-300 border border-[#00969F] text-xs">
            OPEN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TestDashboard;