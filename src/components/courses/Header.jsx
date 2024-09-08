"use client";
import React, { useState } from "react";
import { Menu, Button, Drawer, Input } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/searchIcon.svg";
import downArrow from "../../assets/icons/downArrowCourseMenu.svg"
import upperTArrow from "../../assets/icons/upperTriangle.svg"
import { icons } from "antd/es/image/PreviewGroup";
const items = [
  {
    label: <Link href="/"> Home </Link>,
    key: "home",
  },
  {
    label: <Link href="/"> Courses </Link>,
    key: "courses",
    icons: <img src={downArrow} alt="downarrow"/>,
    children: [
        { label: 'Option 1', key: 'setting:1' },
        { label: 'Option 2', key: 'setting:2' },
    ]
  },
  {
    label: <Link href="/welcome"> About </Link>,
    key: "welcome",
    children: [
        { label: 'Option 1', key: 'setting:1' },
        { label: 'Option 2', key: 'setting:2' },
    ]
  },
  {
    label: <Link href="/"> For Investors </Link>,
    key: "investors",
  },
];

export default function Header() {
  const [current, setCurrent] = useState("/");
  const [state, setState] = useState({
    current: "mail",
    visible: false,
  });

  const showDrawer = () => {
    setState({ visible: true });
  };

  const onClose = () => {
    setState({ visible: false });
  };

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <div className=" w-full bg-[#24272A] py-9">
        <div className="flex justify-between items-center gap-2 max-w-[1272px] w-full text-sm text-white font-bold mx-auto ">
          <div className="main_menu w-1/2 flex justify-between">
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
              className="bigmenu bg-transparent  w-full"
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
            {/* <img src="/icons/search.svg" alt="" /> */}
            <div className="flex justify-between items-center gap-3 hide">
              <p className="flex items-center gap-1">2.94 AED / +0.00% <img src={upperTArrow} alt="upper arrow" /></p>
              <Button type="primary" size={"large"} shape="round" className="bg-[#FF6B00]">
                Register or Log In
              </Button>
              <p className="flex items-center gap-1">En <img src={downArrow} alt="down arrow"/></p>
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
