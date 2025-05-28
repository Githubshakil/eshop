import { useEffect, useRef, useState } from "react";
// language changer
import { useTranslation } from "react-i18next";

import Container from "../commonlayout/Container";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const BottomBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const { t } = useTranslation();

  const dropdownRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (event) => {
      // console.log(dropdownRef.current);

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  const handleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleCategoryOpen = () => {
    setCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="bg-[#ff624c]">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div>
            <ul className='flex items-center gap-[80px] text-white font-["Montserrat"] font-bold text-base leading-6'>
              <li className=" relative" ref={categoryRef}>
                <button
                  onClick={handleCategoryOpen}
                  className="flex items-center gap-4 cursor-pointer"
                >
                  <FaBars className="cursor-pointer " /> {t("All_Categories")}
                </button>
                {isCategoryOpen && (
                  <div className=" absolute z-10 mt-2 w-45 bg-white rounded shadow-lg">
                    <ul className="py-2 font-['Montserrat'] font-normal text-[14px] leading-6 text-black">
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300"
                        onClick={() => setCategoryOpen(false)}
                      >
                        Computers & Tablets
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300"
                        onClick={() => setCategoryOpen(false)}
                      >
                        Mobile Phones & Accessories
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300"
                        onClick={() => setCategoryOpen(false)}
                      >
                        TV & Home Theater
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300"
                        onClick={() => setCategoryOpen(false)}
                      >
                        Audio & Headphones
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300"
                        onClick={() => setCategoryOpen(false)}
                      >
                        Cameras & Camcorders
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300"
                        onClick={() => setCategoryOpen(false)}
                      >
                        Gaming Equipment
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300"
                        onClick={() => setCategoryOpen(false)}
                      >
                        {" "}
                        Home Appliances
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li className=" relative" ref={dropdownRef}>
                <button
                  onClick={handleDropdown}
                  className="flex items-center gap-4 cursor-pointer"
                >
                  Products
                  <FaAngleDown
                    onClick={handleDropdown}
                    className={`cursor-pointer ${
                      isDropdownOpen && "rotate-180"
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className=" absolute z-10 mt-2 w-45 bg-white rounded shadow-lg">
                    <ul className="py-2 font-['Montserrat'] font-normal text-[14px] leading-6 text-black">
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Wireless Mouse
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Bluetooth Headphones
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Smart Watch
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Gaming Keyboard
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        4K Monitor
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Portable SSD
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Action Camera
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        VR Headset
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Drone
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Smart Home Speaker
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Fitness Tracker
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Wireless Charger
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Smart Light Bulb
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Laptop Stand
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Noise Cancelling Earbuds
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <Link to={"/blog-page"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact-page"}>Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <ul className='flex items-center gap-[80px] text-white font-["Montserrat"] font-bold text-base leading-6'>
                <li>
                  <Link to={"#"} className="flex items-center gap-4">
                    {" "}
                    LIMITED SALE 👋🏻
                  </Link>
                </li>
                <li>
                  <Link to={"#"} className="flex items-center gap-4">
                    Best Seller
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>New Arrival</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomBar;
