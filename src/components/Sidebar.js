import Image from "next/image";
import React from "react";
import { Avatar, Container, Text} from '@nextui-org/react';
import { FiLogOut,FiUsers,FiList } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";

const sidebarItems = [ //กำหนดข้อมูลที่จะใส่ใน sidebar มี : ชื่อ ลิงก์ ไอคอน
  {
    name: "Service Management",
    href: "\serviceManage",
    icon: FiList,
  },
  {
    name: "Staff Management",
    href: "\staffManage",
    icon: FiUsers,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext); // ทำให้ sidebar สามารถกดเพิ่ม ลดขนาดได้

  return (
    <div className="sidebar__wrapper">
      {/*ปุ่มลูกศรสำหรับยุบ ขยาย sidebar*/}
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top"> {/*ส่วนบนของ Sidebar : ส่วนหัวที่มีโลโก้+ชื่อเว็บ*/}
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

        {/*ภาพ User*/}
        <Container css={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"1.5rem"}}>
          <Avatar size={"lg"} 
                  color={"warning"}
                  src="https://i.pinimg.com/736x/41/7a/bf/417abf01ebae2804314ed36c05d3379c.jpg"
          />           
        </Container>
        {/*ชื่อ User*/}
        <Container css={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Text size={17} css={{marginTop:"1rem", marginBottom:"2rem"}}>Admin name</Text>
        </Container>
        
        {/*menu list ใน sidebar*/}
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => { {/*ดึงข้อมูลมาจากข้างบนที่ใส่ข้อมูลไว้*/}
          {/*คำสั่ง link active ตอนนี้มันแตกอยู่ ยังไม่ได้แก้ ถ้าแก้ได้ เวลากดเข้าหน้าไหน เมนูจะเปลี่ยนสี*/}
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

        <div className="sidebar__bottom" /> {/*ส่วนล่างของ sidebar*/}
          <ul className="sidebar__list">
            <li className="sidebar_item">
              <Link className="sidebar__link" href={"https://nextui.org/"}> 
              <span className="sidebar__icon"><FiLogOut/></span>
              <span className="sidebar__name">Log out</span></Link>
            </li>
          </ul>
        
      </aside>
    </div>
  );
};

export default Sidebar;
