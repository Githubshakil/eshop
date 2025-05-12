import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";

const TopRightBar = () => {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const countries = [
        { name: "United State", value: "us" , flag: "https://flagcdn.com/16x12/us.png" },
        { name: "Spain", value: "es" , flag: "https://flagcdn.com/16x12/es.png" },
        { name: "France", value: "fr" , flag: "https://flagcdn.com/16x12/fr.png" },
        { name: "Germany", value: "de" , flag: "https://flagcdn.com/16x12/de.png" },
        { name: "Italy", value: "it" , flag: "https://flagcdn.com/16x12/it.png" },
        { name: "Portugal", value: "pt" , flag: "https://flagcdn.com/16x12/pt.png" },
        { name: "Netherlands", value: "nl" , flag: "https://flagcdn.com/16x12/nl.png" },
        { name: "Sweden", value: "se" , flag: "https://flagcdn.com/16x12/se.png" },
        { name: "Norway", value: "no" , flag: "https://flagcdn.com/16x12/no.png" },
        { name: "Denmark", value: "dk" , flag: "https://flagcdn.com/16x12/dk.png" },
        { name: "Bangladesh", value: "bd" , flag: "https://flagcdn.com/16x12/bd.png" },
        { name: "India", value: "in" , flag: "https://flagcdn.com/16x12/in.png" },
        { name: "Pakistan", value: "pk" , flag: "https://flagcdn.com/16x12/pk.png" },
        { name: "Nepal", value: "np" , flag: "https://flagcdn.com/16x12/np.png" },
        { name: "Bhutan", value: "bt" , flag: "https://flagcdn.com/16x12/bt.png" },
        { name: "Sri Lanka", value: "lk" , flag: "https://flagcdn.com/16x12/lk.png" },
        { name: "Maldives", value: "mv" , flag: "https://flagcdn.com/16x12/mv.png" },
            
       
    ];
    const handleSelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    }


  return (
    <div className='flex justify-end items-center gap-[49px]'>
        <div>usd</div>
        <div className='relative after:content-[""] after:bg-[#bfbfbf] after:absolute after:w-[1px] after:h-[32px] after:left-[-25px] after:top-[50%] after:-translate-[50%] before:content-[""] before:bg-[#bfbfbf] before:absolute before:w-[1px] before:h-[32px] before:right-[-25px] before:top-[50%] before:-translate-[50%]'>
            <select className='w-[150px] hidden' name="country"
            value={selectedCountry?.value || ""}
            onChange={(e)=>{
              const country = countries.find((c) => c.value === e.target.value)
              setSelectedCountry(country);
            }}
            >
               {countries.map((country, index)=>(
                   <option value={country.name}>{country.name}</option>

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
                                {country.value}
                            </li>
                        ))}
                    </ul>
               )

               }




        </div>
        <div>media</div>
    </div>
  )
}

export default TopRightBar