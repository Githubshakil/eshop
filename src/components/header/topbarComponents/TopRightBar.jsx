import { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
import { useDispatch } from 'react-redux';
import { language } from '../../../redux/slices/langSlice';
=======
import i18n from 'i18next';

>>>>>>> Stashed changes

const TopRightBar = () => {
     const countries = [
        { name: "United State", value: "us", lngu: "en", flag: "https://flagcdn.com/16x12/us.png" },      
        { name: "Bangladesh", value: "bd", lngu: "bn", flag: "https://flagcdn.com/16x12/bd.png" },
        
    ];


    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const dispatch = useDispatch()
    
    const countryDropdownRef = useRef(null)
    
    useEffect(()=>{
        const handleClickOutSide = (event) => {
            if(countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        
        document.addEventListener('mousedown', handleClickOutSide)
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide)
        }
    },[])
    useEffect(()=>{
        dispatch(language(selectedCountry))
    },[selectedCountry])
    
   
    
    
    const currency = [
        { name: "USD", value: "USD" },
        { name: "BDT", value: "BDT" },
        { name: "EUR", value: "EUR" },
        { name: "GBP", value: "GBP" },
        { name: "INR", value: "INR" },
        { name: "JPY", value: "JPY" },
        { name: "AUD", value: "AUD" },
        { name: "CAD", value: "CAD" },
        
    ]
    
    const handleSelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
        if (country && country.language) {
            i18n.changeLanguage(country.language);
        }
    }
    
    
    
    return (
        <div className='flex justify-end items-center gap-[49px] '>
        <div>
            <select 
            className='cursor-pointer'
            name="currency"
            value={selectedCurrency}
            onChange={(e)=>{
                const currency = e.target.value;
                setSelectedCurrency(currency);
            }
        }>
            {
                currency.map((curr, index)=>(
                    <option key={index} value={curr.value}>{curr.name}</option>
                ))
            }
            </select>
            
        </div>
        
                
        <select className='w-[150px] hidden' name="country"
                    value={selectedCountry?.value || ""}
                    onChange={(e)=>{
                      const country = countries.find((c) => c.value === e.target.value)
                      if (country) {
                        setSelectedCountry(country);
                        if (country.language) {
                          i18n.changeLanguage(country.language);
                        }
                      }
                    }}
        >
          {countries.map((country, index)=>(
            <option key={index}
              value={country.value}
            >{country.name}</option>
          ))}
        </select>

        {/* custom DropDown */}
        <div ref={countryDropdownRef} className="relative inline-block">
          <div
            className=' w-[175px] p-2 cursor-pointer flex items-center'
            onClick={()=> setIsOpen(!isOpen)}
          >
            {
              selectedCountry
              ?
              <>
                <img src={selectedCountry?.flag} alt={selectedCountry?.name} className='w-5 h-4 mr-2'/>
                <span className='mr-5'>{selectedCountry?.name}</span>
                <FaAngleDown />
              </>
              :
              <span className='gap-3 flex items-center'>Select a Country <FaAngleDown /></span>
            }
          </div>

          {/* option list */}
          {isOpen && (
            <ul className='absolute w-[150px] border-gray-300 bg-white shadow-lg z-10'>
              {countries.map((country, index)=>(
                <li
                  key={country.value}
                  className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'
                  onClick={()=> handleSelect(country)}
                >
                  <img src={country?.flag} alt={country?.name} className='w-5 h-4 mr-2'/>
                  {country.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='flex items-center gap-5 cursor-pointer'>
           <Link to={"#"}><FaFacebookF /></Link>
           <Link to={"#"}><FaTwitter /></Link>
           <Link to={"#"}><FaInstagram /></Link> 
        </div>
    </div>
  )
}

export default TopRightBar