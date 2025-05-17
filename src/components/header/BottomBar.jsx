import { useEffect, useRef, useState } from "react";
import Container from "../commonlayout/Container";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { ImMenu3 } from "react-icons/im";

const BottomBar = () => {

      const [isDropdownOpen, setDropdownOpen] = useState(false);
      const [isCategoryOpen, setCategoryOpen] = useState(false)

      const dropdownRef = useRef(null)
      const categoryRef = useRef(null)

      useEffect(() => {

        const handleClickOutSide = (event) => {
          console.log(dropdownRef.current);

          if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
            setDropdownOpen(false)
          }
          if(categoryRef.current && !categoryRef.current.contains(event.target)){
            setCategoryOpen(false)
          }
        }
          
          
          

        document.addEventListener('mousedown', handleClickOutSide)
        return () => {
          document.removeEventListener('mousedown', handleClickOutSide)
        }
      },[])



      const handleDropdown = ()=>{
        setDropdownOpen (!isDropdownOpen);
      }
      const handleCategoryOpen = () =>{
        setCategoryOpen (!isCategoryOpen)
      }

     
     

  return (
    <div className="bg-[#ff624c]">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div>
            <ul className='flex items-center gap-[80px] text-white font-["Montserrat"] font-bold text-base leading-6'>
              <li className=" relative" ref={categoryRef}>
                <button onClick={handleCategoryOpen}  className="flex items-center gap-4 cursor-pointer">
                  <FaBars onClick={handleCategoryOpen} className={`cursor-pointer ${isCategoryOpen && "rotate-90"}`}  /> All Categories
                </button>
                {isCategoryOpen && (
                  <div className=" absolute z-10 mt-2 w-45 bg-white rounded shadow-lg">
                      <ul className="py-2 font-['Montserrat'] font-normal text-[14px] leading-6 text-black">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300  ">Computers & Tablets</li>    
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300 ">Mobile Phones & Accessories</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300 ">TV & Home Theater</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300 ">Audio & Headphones</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300 ">Cameras & Camcorders</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300 ">Gaming Equipment</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-[#ff624c] duration-300 "> Home Appliances</li>
                      </ul>
                  </div>
                )}
              </li>

              <li className=" relative" ref={dropdownRef}>
                <button onClick={handleDropdown} className="flex items-center gap-4 cursor-pointer">
                  Products
                  <FaAngleDown  onClick={handleDropdown} className={`cursor-pointer ${isDropdownOpen && "rotate-180"}`}  />
                </button>
                {isDropdownOpen && (
                  <div className=" absolute z-10 mt-2 w-45 bg-white rounded shadow-lg">
                      <ul className="py-2 font-['Montserrat'] font-normal text-[14px] leading-6 text-black">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Wireless Mouse</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Bluetooth Headphones</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Smart Watch</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Gaming Keyboard</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">4K Monitor</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Portable SSD</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Action Camera</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">VR Headset</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Drone</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Smart Home Speaker</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Fitness Tracker</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Wireless Charger</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Smart Light Bulb</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Laptop Stand</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:text-[#ff624c] duration-300">Noise Cancelling Earbuds</li>
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
