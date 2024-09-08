import React, { useEffect, useState } from "react";
import imageOne from "../assets/images/welcomeScreenImg1.png";
import imageTwo from "../assets/images/welcomeScreenImg2.png";
import rightArrow from "../assets/icons/rightArrow.svg";
import waveImg from "../assets/images/waveAnimation.png";
import { motion } from 'framer-motion';
import WelcomeScreenHeader from "./WelcomeScreenHeader";

const WelcomeScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [imageOne, imageTwo];
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to rotate images
  const rotateImages = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(rotateImages, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change 100 to the scroll threshold you prefer
        setIsScrolled(true);
      }
      // if you want to resize to default size
      //  else {
      //    setIsScrolled(false);
      //  }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
        <WelcomeScreenHeader/>
      <div className="flex items-center justify-center min-h-screen bg-[#fbf8f4] overflow-hidden mt-5">
        <div
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            width: isScrolled ? "100vw" : "412px", // Switch between square and full width
            height: isScrolled ? "100vh" : "569px", // Maintain full viewport height
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "width 0.5s ease-out", // Smooth transition
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={`${!isScrolled && "rounded-t-[250px]"}`}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {isScrolled && (
              <div className="absolute top-[131px] sm:w-[412px] w-[300px] h-[200px] border-2 border-solid rounded-t-[250px] border-b-0 border-[#0E4957]"></div>
            )}

            <h2 className="mt-[132px] text-center text-[#0E4957] font-fugi 2xl:text-[72px] xl:text-[65px] lg:text-[60px] md:text-[50px] text-[36px] font-normal leading-[120%] tracking-[-0.36px] px-4 2xl:w-[55%] sm:w-[60%] w-full   z-10">
              Welcome to The World of Infinite Vacations
            </h2>
            {isScrolled && (
              <div className="absolute bottom-[0px] sm:w-[412px] w-[300px] h-[200px] border-2 border-t-0 border-solid  border-[#0E4957]"></div>
            )}
          </div>
        </div>
      </div>
      <div className="py-[106px] relative">
      {/* className="w-[125px] absolute left-[18%] top-[57px]" */}

      <svg
      className="w-[125px] absolute xl:left-[18%] lg:left-[2%] left-0 top-[57px]"
    viewBox="0 0 125 106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <g id="Property 1=Default" clipPath="url(#clip0_404_2695)">
      <g id="Group 2">
        <motion.path
          id="Vector"
          d="M600 38.5C562.5 38.5 562.5 12.5 525 12.5C487.5 12.5 487.5 38.5 450 38.5C412.5 38.5 412.5 12.5 375 12.5C337.5 12.5 337.5 38.5 300 38.5C262.5 38.5 262.5 12.5 225 12.5C187.5 12.5 187.5 38.5 150 38.5C112.5 38.5 112.5 12.5 75 12.5C37.5 12.5 37.5 38.5 0 38.5"
          stroke="#6292A5"
          strokeMiterlimit="10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path
          id="Vector_2"
          d="M600 65.69C562.5 65.69 562.5 39.69 525 39.69C487.5 39.69 487.5 65.69 450 65.69C412.5 65.69 412.5 39.69 375 39.69C337.5 39.69 337.5 65.69 300 65.69C262.5 65.69 262.5 39.69 225 39.69C187.5 39.69 187.5 65.69 150 65.69C112.5 65.69 112.5 39.69 75 39.69C37.5 39.69 37.5 65.69 0 65.69"
          stroke="#6292A5"
          strokeMiterlimit="10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path
          id="Vector_3"
          d="M600 92.88C562.5 92.88 562.5 66.88 525 66.88C487.5 66.88 487.5 92.88 450 92.88C412.5 92.88 412.5 66.88 375 66.88C337.5 66.88 337.5 92.88 300 92.88C262.5 92.88 262.5 66.88 225 66.88C187.5 66.88 187.5 92.88 150 92.88C112.5 92.88 112.5 66.88 75 66.88C37.5 66.88 37.5 92.88 0 92.88"
          stroke="#6292A5"
          strokeMiterlimit="10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_404_2695">
        <rect width="125" height="105.38" fill="white" />
      </clipPath>
    </defs>
  </svg>

        <div className="flex justify-center lg:w-full w-[80%] mx-auto ">
          <div className="px-[60px] py-8 sm:flex justify-center items-center gap-[26px] bg-[#EDDCCA] rounded-[50px]">
            <p className="text-[#0E4957] text-base sm:text-start text-center">
              <span className="font-bold">At Infinia Vacation Club,</span> we
              redefine the concept of vacation ownership
            </p>
            <button className="border border-[#0E4957] rounded-3xl py-3 px-6 text-xs flex justify-center item-center gap-2 mx-auto sm:mt-0 mt-3">
              JOIN US <img src={rightArrow} alt="arrow" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
