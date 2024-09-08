import React from "react";
import search from "../assets/icons/search.svg";
import downArrow from "../assets/icons/downArrow.svg";
import rightArrow from "../assets/icons/rightArrow.svg";

const WelcomeScreenHeader = () => {
  return (
    <div className=" flex items-center w-full relative h-[90px] text-left text-xs text-midnight-green font-button justify-center">
      {/* <div className="absolute top-[108px] right-[0px] bg-white w-[1512px] h-[108px]" /> */}
      <img
        className=" top-[30px] left-[338px] w-12 h-12 overflow-hidden"
        alt=""
        src={search}
      />
      <div className=" flex items-center top-[32px] h-11">
        <div className=" top-[0px] left-[0px] flex flex-col items-center justify-center p-4 gap-2.5 text-rackley">
          <div className="relative tracking-[0.1em] leading-[100%] uppercase font-medium">
            HOME
          </div>
          
        </div>
        <div className=" top-[0px] left-[82px] flex flex-row items-center justify-center p-4">
          <div className=" tracking-[0.1em] leading-[100%] uppercase font-medium">
            Membership
          </div>
        </div>
        <div className=" top-[0px] left-[216px] flex flex-row items-center justify-center p-4">
          <div className=" tracking-[0.1em] leading-[100%] uppercase font-medium">
            OUR HOTELS
          </div>
        </div>
        <div className=" top-[0px] left-[349px] flex flex-row items-center justify-center p-4">
          <div className=" tracking-[0.1em] leading-[100%] uppercase font-medium">
            INFINIA Inner Circle
          </div>
        </div>
        <div className=" top-[0px] left-[552px] flex flex-row items-center justify-center p-4">
          <div className=" tracking-[0.1em] leading-[100%] uppercase font-medium">
            Our Story
          </div>
        </div>
        <div className="rounded-3xl border-midnight-green border-[1px] border-solid border-[#0E4957] flex flex-row items-end justify-start pt-[13px] pb-[11px] pl-6 pr-0 gap-3">
          <div className=" tracking-[0.1em] leading-[100%] uppercase font-medium">
            JOIN US
          </div>
          <img
            className="w-[38px]  h-3.5 overflow-hidden shrink-0"
            alt=""
            src={rightArrow}
          />
        </div>
        <div className="flex flex-row items-center justify-center p-2">
          <div className=" [text-decoration:underline] tracking-[0.1em] leading-[100%] font-medium">
            LOG IN
          </div>
        </div>
        <div className="flex flex-row items-center justify-start p-2">
          <div className=" tracking-[0.1em] leading-[100%] uppercase font-medium">
            EN
          </div>
          <img
            className="w-6  h-6 overflow-hidden shrink-0 object-contain"
            alt=""
            src={downArrow}
          />
        </div>
      </div>
      
    </div>
  );
};

export default WelcomeScreenHeader;
