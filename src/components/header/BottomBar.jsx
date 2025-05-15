import { useEffect, useRef, useState } from "react";
import Container from "../commonlayout/Container";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

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
      const handlecategoryOpen = () =>{
        setCategoryOpen (!isCategoryOpen)
      }
     

  return (
    <div className="bg-[#ff624c]">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div>
            <ul className='flex items-center gap-[80px] text-white font-["Montserrat"] font-bold text-base leading-6'>
              <li className=" relative" ref={categoryRef}>
                <button onClick={handlecategoryOpen}  className="flex items-center gap-4 cursor-pointer">
                  <FaBars className="cursor-pointer"  /> All Categories
                </button>
                {isCategoryOpen && (
                  <div className=" absolute z-10 mt-2 w-38 bg-white rounded shadow-lg">
                      <ul className="py-2 font-['Montserrat'] font-normal text-base leading-6 text-black">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-300">product 1</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-300">product 2</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-300">product 3</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-300">product 4</li>
                      </ul>
                  </div>
                )}
                
              </li>



              <li className=" relative" ref={dropdownRef}>
                <button onClick={handleDropdown} className="flex items-center gap-4 cursor-pointer">
                  Products
                  <FaAngleDown className="cursor-pointer" onClick={handleDropdown}  />
                </button>
                {isDropdownOpen && (
                  <div className=" absolute z-10 mt-2 w-38 bg-white rounded shadow-lg">
                      <ul className="py-2 font-['Montserrat'] font-normal text-base leading-6 text-black">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-300">product 1</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-300">product 2</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-300">product 3</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-300">product 4</li>
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
