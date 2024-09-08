import React, { useState } from "react";
import { motion } from "framer-motion";
import lvIcon from "../../assets/icons/LVIcon.svg";
import HVIcon from "../../assets/icons/HVIcon.svg";
import HBIcon from "../../assets/icons/HBIcon.svg";
import LMIcon from "../../assets/icons/LMIcon.svg";
import HMIcon from "../../assets/icons/HMIcon.svg";
import motorIcon from "../../assets/icons/motorIcon.svg";
const coursesData = [
  {
    id: 1,
    image: lvIcon,
    title: "Light Vehicle",
  },
  {
    id: 2,
    image: HVIcon,
    title: "Heavy Vehicle",
  },
  {
    id: 3,
    image: HBIcon,
    title: "Heavy Bus",
  },
  {
    id: 4,
    image: LMIcon,
    title: "Light Machinery",
  },
  {
    id: 5,
    image: HMIcon,
    title: "Heavy Machinery",
  },
  {
    id: 6,
    image: motorIcon,
    title: "Motorcycle",
  },
];

const OurCourses = () => {
  return (
    <div className="max-w-[1272px] 2xl:px-0 px-5 w-full md:py-[9.554rem] py-5 mx-auto">
      <h1 className="text-2xl font-bold text-center pb-5">Our Courses</h1>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {coursesData?.map((courseData) => {
          return <CourseComp {...courseData} key={courseData?.id} />;
        })}
      </div>
    </div>
  );
};

const CourseComp = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const { id, image, title } = props;
  return (
   <div
      className="bg-[#24272A] rounded-2xl flex flex-col justify-end items-center py-10 overflow-hidden relative min-h-[203px] max-w-[405px] "
      key={id}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.img
        src={image} 
        alt="courses icons"
        className="absolute top-[45px]"
        animate={
          isHovering
            ? {
              x: [0, 250, 250, -405, -405, 0], 
                opacity: [1, 1, 0, 0, 1, 1],
                transition: {
                  duration: 3, 
                  ease: "linear",
                  repeat: Infinity, 
                },
              }
            : { x: 0, opacity: 1 } 
        }
      />
      <h2 className="text-[2rem] leading-[48px] font-normal text-white">
        {title}
      </h2>
    </div>
  );
};

export default OurCourses;
