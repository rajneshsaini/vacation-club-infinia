"use client";
import React, { useState } from "react";
import { Menu, Button, Drawer, Input } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/searchIcon.svg";
import downArrow from "../../assets/icons/downArrowCourseMenu.svg";
import upperTArrow from "../../assets/icons/upperTriangle.svg";

const items = [
  {
    label: <Link to="/"> Home </Link>,
    key: "home",
  },
  {
    label: ( 
      <Link to="/" className="flex justify-center items-center gap-2 text-white">
        Courses <img src={downArrow} alt="downarrow" className="mt-[2px]" />
      </Link>
    ),
    key: "courses",
    children: [
      { label: "Option 1", key: "setting:1" },
      { label: "Option 2", key: "setting:2" },
    ],
  },
  {
    label: (
      <Link to="/welcome" className="flex justify-center items-center gap-2  text-white">
        About <img src={downArrow} alt="downarrow" className="mt-[2px]" />
      </Link>
    ),
    key: "welcome",
    children: [
      { label: "Option 1", key: "setting:3" },
      { label: "Option 2", key: "setting:4" },
    ],
  },
  {
    label: <Link to="/" className=" text-white"> For Investors </Link>,
    key: "investors",
  },
];

export default function Header() {
  const [current, setCurrent] = useState("home");

  const [state, setState] = useState({
    visible: false,
  });

  const showDrawer = () => {
    setState({ visible: true });
  };

  const onClose = () => {
    setState({ visible: false });
  };

  const onClick = (e) => {
    setCurrent(e.key); // Update current state to highlight active item
  };

  return (
    <>
      <div className="w-full bg-[#24272A] py-9">
        <div className="flex justify-between items-center gap-2 max-w-[1272px] w-full text-sm text-white font-bold mx-auto">
          <div className="main_menu w-1/2 flex justify-between">
            <Menu
              onClick={onClick}
              selectedKeys={[current]} // Set the active menu item
              mode="horizontal"
              items={items.map((item) => ({
                ...item,
                style: {
                  color: current === item.key ? "#FF6B00" : "white", // Change color dynamically
                },
              }))}
              className="bigmenu bg-transparent w-full"
            />
            <Input
              placeholder="Search..."
              prefix={
                <img src={searchIcon} alt="Search Icon" className="w-5 h-5" />
              }
              className="w-[185px] rounded-full"
            />
          </div>
          <div className="flex gap-4 items-center ">
            <div className="flex justify-between items-center gap-3 hide">
              <p className="flex items-center gap-1">
                2.94 AED / +0.00% <img src={upperTArrow} alt="upper arrow" />
              </p>
              <Button
                type="primary"
                size={"large"}
                shape="round"
                className="bg-[#FF6B00]"
              >
                Register or Log In
              </Button>
              <p className="flex items-center gap-1">
                En <img src={downArrow} alt="down arrow" />
              </p>
            </div>
            <>
              <Button
                className="menubtn"
                type="primary"
                shape="circle"
                icon={<MenuOutlined />}
                onClick={showDrawer}
              />
              <Drawer placement="right" onClose={onClose} open={state.visible}>
                <div className="mobile_menu flex flex-col">
                  <Button type="text" href="/">
                    Home
                  </Button>
                  <Button type="text">Courses</Button>
                  <Button type="text">About</Button>
                  <Button type="text" href="/success_stories">
                    For Investors
                  </Button>
                </div>
              </Drawer>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
