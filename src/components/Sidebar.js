import Image from "next/image";
import React from "react";
import { Avatar } from '@nextui-org/react';
import { CiViewList, CiUser} from "react-icons/ci";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";

const sidebarItems = [
  {
    name: "ServiceManagement",
    href: "\serviceManage",
    icon: CiViewList,
  },
  {
    name: "StaffManagement",
    href: "\staffManage",
    icon: CiUser,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/logo-kmutnb.jpg"
            alt="logo"
          />
          <ul>
          <p className="sidebar__logo-name">KMUTNB</p>
          <p className="sidebar__sublogo-name">Information Service Personalized <br/>
          Portal Management System</p></ul>
        </div>
        <ul className="sidebar__list">
          <li className="sidebar__item"> 
            <Avatar
              size= "xl"
              color= "warning"
              src="https://i.pinimg.com/736x/41/7a/bf/417abf01ebae2804314ed36c05d3379c.jpg"
              bordered
            />
            <p>testtt</p>
          </li>
        </ul>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
