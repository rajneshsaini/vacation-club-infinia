import React from "react";
import arrow from "../../assets/icons/greenArrow.svg";
const NumberData = [
  {
    id: 1,
    title: "Light Vehicle",
    aedValue: "356M",
    percentValue: 5,
  },
  {
    id: 2,
    title: "Heavy Vehicle",
    aedValue: "267M",
    percentValue: 5,
  },
  {
    id: 3,
    title: "Heavy Bus",
    aedValue: "1.3B",
    percentValue: 5,
  },
  {
    id: 4,
    title: "Light Machinery",
    aedValue: "1.1B",
    percentValue: 5,
  },
  {
    id: 5,
    title: "Heavy Machinery",
    aedValue: "3.6B",
    percentValue: 5,
  },
  {
    id: 6,
    title: "Motorcycle",
    aedValue: "3.6B",
    percentValue: 5,
  },
];
const NumberCards = () => {
  return (
    <div className="max-w-[1027px] w-full pb-[88px] mx-auto">
      <div className="grid gap-[50px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-[14px]">
        {NumberData?.map((data) => {
          return <NumberComp {...data} key={data?.id} />;
        })}
      </div>
    </div>
  );
};

const NumberComp = (props, key) => {
  const { title, aedValue, percentValue } = props;
  return (
    <div
      className="bg-[#FAFBFC] border border-[#DFDFDF] rounded-2xl min-h-[150px] flex flex-col justify-between px-6 py-4 hover-animation group"
      key={key}
    >
      <h2 className="text-2xl text-[#24272A]">{title}</h2>
      <div className="flex justify-between items-end">
        <p className="text-[40px] leading-10 font-bold text-[#24272A]">
          {aedValue}
          <span className="text-2xl font-normal uppercase pl-1">AED</span>
        </p>
        <div className="flex gap-2">
          <p className="text-2xl text-#24272A">{percentValue}%</p>
            <img src={arrow} alt="arrow" className="go-arrow filter grayscale-0 group-hover:grayscale-100 group-hover:brightness-0" />
          <div className="go-corner">
          </div>
        </div>
      </div>
    </div>
  );
};
export default NumberCards;
