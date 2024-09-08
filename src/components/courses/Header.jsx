"use client";
import React, { useState } from "react";
import { Menu, Button, Drawer, Input, Dropdown } from "antd";
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
      <Link to="/" className="flex justify-center items-center gap-2  text-white">
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
const langMenu = (
  <Menu>
    <Menu.Item key="1">English</Menu.Item>
    <Menu.Item key="2">Spanish</Menu.Item>
    <Menu.Item key="3">French</Menu.Item>
  </Menu>
);
export default function Header() {
  const [current, setCurrent] = useState("home");
  const [visible, setVisible] = useState(false);

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
  const handleMenuClick = (e) => {
    console.log('Menu item clicked:', e);
    setVisible(false);
  };
  return (
    <>
      <div className="w-full bg-[#24272A] lg:py-9 py-4 coursesHeader">
        <div className="flex justify-between items-center gap-2 max-w-[1272px] 2xl:px-0 px-5 w-full text-sm text-white font-bold mx-auto">
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
              className="min-w-[185px] w-[185px] h-[39px] rounded-full"
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
              </p>
            </div>
            <>
              <Button
                className="menubtn"
                shape="circle"
                icon={<MenuOutlined />}
                onClick={showDrawer}
                classNames="bg-[#FF6B00]"
              />
              <Drawer placement="right" onClose={onClose} open={state.visible} className="!bg-[#FF6B00]">
                <div className="mobile_menu flex flex-col">
                  <Menu
                    mode="inline"
                    theme="[#24272A]"
                    items={items}
                  />
                </div>
              </Drawer>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
