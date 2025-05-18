import { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TopRightBar = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    
    
    const countryDropdownRef = useRef(null)
    
    useEffect(()=>{
        const handleClickOutSide = (event) => {
            if(countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        
        document.addEventListener('mousedown', handleClickOutSide)
    },[])
    
    const countries = [
        { name: "United State", value: "us", language: "en", flag: "https://flagcdn.com/16x12/us.png" },
        { name: "Spain", value: "es", language: "es", flag: "https://flagcdn.com/16x12/es.png" },
        { name: "France", value: "fr", language: "fr", flag: "https://flagcdn.com/16x12/fr.png" },
        { name: "Germany", value: "de", language: "de", flag: "https://flagcdn.com/16x12/de.png" },
        { name: "Italy", value: "it", language: "it", flag: "https://flagcdn.com/16x12/it.png" },
        { name: "Portugal", value: "pt", language: "pt", flag: "https://flagcdn.com/16x12/pt.png" },
        { name: "Netherlands", value: "nl", language: "nl", flag: "https://flagcdn.com/16x12/nl.png" },
        { name: "Sweden", value: "se", language: "sv", flag: "https://flagcdn.com/16x12/se.png" },
        { name: "Norway", value: "no", language: "no", flag: "https://flagcdn.com/16x12/no.png" },
        { name: "Denmark", value: "dk", language: "da", flag: "https://flagcdn.com/16x12/dk.png" },
        { name: "Bangladesh", value: "bd", language: "bn", flag: "https://flagcdn.com/16x12/bd.png" },
        { name: "India", value: "in", language: "hi", flag: "https://flagcdn.com/16x12/in.png" },
        { name: "Pakistan", value: "pk", language: "ur", flag: "https://flagcdn.com/16x12/pk.png" },
        { name: "Nepal", value: "np", language: "ne", flag: "https://flagcdn.com/16x12/np.png" },
        { name: "Bhutan", value: "bt", language: "dz", flag: "https://flagcdn.com/16x12/bt.png" },
        { name: "Sri Lanka", value: "lk", language: "si", flag: "https://flagcdn.com/16x12/lk.png" },
        { name: "Maldives", value: "mv", language: "dv", flag: "https://flagcdn.com/16x12/mv.png" },
    ];
    
    
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
        
                
        <div className='relative after:content-[""] after:bg-[#bfbfbf] after:absolute after:w-[1px] after:h-[32px] after:left-[-25px] after:top-[50%] after:-translate-[50%] before:content-[""] before:bg-[#bfbfbf] before:absolute before:w-[1px] before:h-[32px] before:right-[-25px] before:top-[50%] before:-translate-[50%]'
         ref={countryDropdownRef}
        >
            <select className='w-[150px] hidden' name="country"
            value={selectedCountry?.value || ""}
            
            onChange={(e)=>{
              const country = countries.find((c) => c.value === e.target.value)
              
              setSelectedCountry(country);
            }}
            >
               {countries.map((country, index)=>(
                   <option key={index}
                   value={country.name}
                   >{country.name}</option>

               ))}
            </select>

               {/* custom DropDown */}
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
               )

               }




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