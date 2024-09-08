import React, { useState } from "react";
import search from "../assets/icons/search.svg";
import downArrow from "../assets/icons/downArrow.svg";
import rightArrow from "../assets/icons/rightArrow.svg";
import { Button, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

const WelcomeScreenHeader = () => {
  const items = [
    {
      label: <Link to="/"> Home </Link>,
      key: "home",
    },
    {
      label: <Link to="/" className=" text-white"> Membership </Link>,
      key: "membership",
    },
    {
      label: <Link to="/" className=" text-white"> Our Hotels </Link>,
      key: "hotels",
    },
    {
      label: <Link to="/" className=" text-white"> Infinia inner circle </Link>,
      key: "innercircle",
    },
    {
      label: <Link to="/" className=" text-white"> Our Story </Link>,
      key: "ourStory",
    },
   
  ];
  const langMenu = (
    <Menu>
      <Menu.Item key="1">English</Menu.Item>
      <Menu.Item key="2">Spanish</Menu.Item>
      <Menu.Item key="3">French</Menu.Item>
    </Menu>
  );
  const [current, setCurrent] = useState("home");
  const [visible, setVisible] = useState(false);

  const [state, setState] = useState({
    visible: false,
  });
console.log("state",state);

  const showDrawer = () => {
    setState({ visible: true });
  };

  const onClose = () => {
    setState({ visible: false });
  };

  const onClick = (e) => {
    setCurrent(e.key); // Update current state to highlight active item
  };
  const handleMenuClick = (e) => {
    console.log('Menu item clicked:', e);
    setVisible(false);
  };
  return (
    <div className="welcomeHeader max-w-[1070px] mx-auto flex items-center w-full relative lg:h-[108px] h-[90px] text-left text-xs text-midnight-green font-button justify-center z-50">
      <img
        className="w-12 h-12 overflow-hidden"
        alt=""
        src={search}
      />
      <div className=" flex items-center top-[32px] h-11 w-[95%]">
        <div className="flex items-center w-[65%] ">
        
            <Menu
              onClick={onClick}
              selectedKeys={[current]} // Set the active menu item
              mode="horizontal"
              items={items.map((item) => ({
                ...item,
                style: {
                  color: "#0E4957", // Change color dynamically
                },
              }))}
              className="bigmenu border-b-0 bg-transparent w-full relative tracking-[0.1em] leading-[100%] uppercase font-medium  text-xs"
            />

        </div>
        <div className="flex items-center md:w-[35%] w-[90%] gap-2">
          <div className="rounded-3xl border-midnight-green border-[1px] border-solid border-[#0E4957] flex flex-row items-center justify-center pt-[13px] pb-[11px] w-[132px] gap-1">
            <p className=" tracking-[0.1em] leading-[100%] uppercase font-medium text-xs">
              JOIN US
            </p>
            <img
              className=""
              alt=""
              src={rightArrow}
            />
          </div>
         
            <div className=" [text-decoration:underline] tracking-[0.1em] leading-[100%] font-medium">
              LOG IN
            </div>
         
          <div className="flex flex-row items-center justify-start p-2">
          <button
                  onClick={() => setVisible(!visible)}
                  className="flex items-center gap-1 cursor-pointer p-2"
                >
                  En <img src={downArrow} alt="down arrow" />
                </button>
                {visible && (
                  <div className="absolute right-0  top-20 mt-2 bg-white border rounded shadow-lg">
                    <Menu
                      onClick={handleMenuClick}
                      items={[
                        { label: 'English', key: '1' },
                        { label: 'Spanish', key: '2' },
                        { label: 'French', key: '3' },
                      ]}
                    />
                  </div>
                )}
          </div>
          <>
              <Button
                className="menubtn"
                shape="circle"
                icon={<MenuOutlined />}
                onClick={showDrawer}
                classNames="bg-[#FF6B00]"
              />
              <Drawer placement="right" onClose={onClose} open={state.visible} className="!bg-[#0E4957] welcomeHeader">
                <div className="mobile_menu flex flex-col">
                  <Menu
                    mode="inline"
                    theme="[#0E4957]"
                    items={items}
                  />
                </div>
              </Drawer>
            </>
        </div>
   
      </div>
    
    </div>
  );
};

export default WelcomeScreenHeader;
