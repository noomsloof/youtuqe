import { Container, FormControl, InputGroup, Nav, Navbar } from "react-bootstrap";
import './HeaderBar.scss'
import React, { useState } from "react";
import { FaBars, FaYoutube } from "react-icons/fa";
import { IoMdDownload, IoMdHome } from "react-icons/io";
import { SiYoutubemusic, SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

type SideBarProps = {
  isOpen: boolean; // รับค่า isOpen จาก parent component 
  toggleSidebar: () => void; // รับฟังก์ชัน toggleSidebar จาก parent component
};

const HeaderBar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {

  const menuItems = [
    {
      label: 'Home',
      icon: <IoMdHome />,
      submenus: [],
    },
    {
      label: 'Shorts',
      icon: <SiYoutubeshorts />,
    },
    {
      label: 'Subscribe',
      icon: <MdOutlineSubscriptions />,
    },
    {
      label: 'Music',
      icon: <SiYoutubemusic />,
    },
    {
      label: 'You',
      icon: <CgProfile />,
    },
    {
      label: 'Download',
      icon: <IoMdDownload />,
    },
  ];


  return (
    <><Navbar bg="light" variant="light" fixed="top">
      <Container fluid className="d-flex justify-content-between align-items-center">

        <div className="d-flex align-item-center">

          <div className="d-flex justify-content-between">
            <button className="custom-nav-listbutton" onClick={toggleSidebar}> <FaBars color="black" /> </button>
          </div>
          <Navbar.Brand href="#home">
            <div className="custom-nav-logo">
              <FaYoutube className="custom-icon" />
              <div> Youtuqe </div>
            </div>
          </Navbar.Brand>
        </div>

        <div style={{ width: "35%" }}>
          <Nav className="ml-auto d-flex align-items-center flex-grow-1 custom-gap-10">
            <InputGroup className="custom-nav-search">
              <FormControl
                type="text"
                placeholder="ค้นหา"
                className="search-input" />
              <button className="search-button">
                <i className="bi bi-search"></i>
              </button>
            </InputGroup>
            <button className="custom-nav-microphone"><i className="bi bi-mic-fill"></i></button>
          </Nav>
        </div>

        <div className="d-flex align-items-center custom-gap-10">
          <Nav><button className="custom-nav-create"> <i className="bi bi-plus big-text"></i> <p className="m-0 small-text">สร้าง</p></button></Nav>
          <Nav><button className="custom-nav-notify"> <i className="bi bi-bell"></i> </button> </Nav>
          <Nav><div className="custom-nav-profile"></div></Nav>
        </div>

      </Container>
    </Navbar>

      <div className="d-flex" style={{ position: 'fixed', }}>
        <div
          className={`bg-light text-black vh-100 p-3 transition-width ${isOpen ? 'sidebar-expanded' : 'sidebar-collapsed'
            }`}
          style={{
            width: isOpen ? '250px' : '100px',
            transition: 'width 0s',
            marginTop: '54px',
          }}
        >
          <ul className="nav flex-column custom-sidebar">
            {menuItems.map((item) => (
              <li key={item.label} className="nav-item mb-1">
                <div
                  className="nav-link text-black d-flex"
                  role="button"
                >
                  <div className="d-flex flex-column align-items-center" style={{ height: '100%', width: '100%' }}>
                    <div>
                      {item.icon}
                    </div>
                    <div className="custom-sidebar-smallfont">{item.label}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Navbar
            bg="light"
            variant="light"
            style={{
              position: 'fixed',
              top: '62px',
              zIndex: 1029,
              height: '46px',
              width: '100%',
              paddingLeft: '1rem',
            }}
          >
            <Nav className="custom-gap-10">
              <Nav.Link className="custom-nav-category" href="#">ทั้งหมด</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">เกม</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">เพลง</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">มิกซ์</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">ข่าวสาร</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">ไลฟ์สด</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">พอตแคสต์</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">บาสเก็ตบอล</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">กีฬา</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">เกมแอ็กชันผจญภัย</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">การทำอาหาร</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">อัพโหลดล่าสุด</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">ดูแล้ว</Nav.Link>
              <Nav.Link className="custom-nav-category" href="#">วิดีโอใหม่สำหรับคุณ</Nav.Link>
            </Nav>
          </Navbar>

        </div>
      </div>
    </>
  );
};

export default HeaderBar;