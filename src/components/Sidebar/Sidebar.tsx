import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSub = (menu: string) =>
    setOpenSub(openSub === menu ? null : menu);

  const menuItems = [
    {
      label: 'Dashboard',
      icon: <FaBars />,
      submenus: [],
    },
    {
      label: 'Settings',
      icon: <FaBars />,
      submenus: ['Profile', 'Account', 'Preferences'],
    },
    {
      label: 'Reports',
      icon: <FaBars />,
      submenus: ['Daily', 'Monthly', 'Yearly'],
    },
  ];

  return (
    <div className="d-flex">
      <div
        className={`bg-dark text-white vh-100 p-3 transition-width ${
          isOpen ? 'sidebar-expanded' : 'sidebar-collapsed'
        }`}
        style={{
          width: isOpen ? '250px' : '60px',
          transition: 'width 0.3s',
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button
            className="btn btn-outline-light btn-sm"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
          {isOpen && <h5 className="mb-0">Menu</h5>}
        </div>

        <ul className="nav flex-column">
          {menuItems.map((item) => (
            <li key={item.label} className="nav-item mb-1">
              <div
                className="nav-link text-white d-flex justify-content-between align-items-center"
                role="button"
                onClick={() =>
                  item.submenus.length > 0 && toggleSub(item.label)
                }
              >
                <div className="d-flex align-items-center gap-2">
                  {item.icon}
                  {isOpen && <span className="ms-2">{item.label}</span>}
                </div>
                {isOpen &&
                  item.submenus.length > 0 &&
                  (openSub === item.label ? <FaChevronDown /> : <FaChevronRight />)}
              </div>

              {isOpen &&
                openSub === item.label &&
                item.submenus.length > 0 && (
                  <ul className="nav flex-column ms-4 mt-1">
                    {item.submenus.map((sub) => (
                      <li key={sub} className="nav-item">
                        <span className="nav-link text-light small">{sub}</span>
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-grow-1 p-4">
        <h1>เนื้อหาหลัก</h1>
        <p>ด้านนี้คือ content ของหน้า</p>
      </div>
    </div>
  );
};

export default Sidebar;
