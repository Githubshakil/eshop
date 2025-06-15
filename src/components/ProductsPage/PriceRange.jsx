import React, { useState } from "react";
import ArrowDown from "../../icons/ArrowDown";
const PriceRange = () => {
  let [minValue, setMinValue] = useState(0);
  let [maxValue, setMaxValue] = useState(0);
  let [isDropdownOpen, setDropdownOpen] = useState(false);

  const updateSlider = (type, value) => {
    if (type == "min") {
      const newMin = Math.min(parseInt(value), maxValue);
      setMinValue(newMin);
    } else {
      const newMax = Math.max(parseInt(value), minValue);
      setMaxValue(newMax);
    }
  };

  const updatevalue = (type, value) => {
    if (type == "min") {
      const newMin = Math.min(parseInt(value), maxValue);
      setMinValue(newMin);
    } else {
      const newMax = Math.max(parseInt(value), minValue);
      setMaxValue(newMax);
    }
  };

  const minPercent = (minValue / 1000) * 100;
  const maxPercent = (maxValue / 1000) * 100;

  const handleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-[355px] bg-[#f4f4f4] rounded-[25px] p-[48px]">
      <div className="flex items-center justify-between">
        <h3 className='font-["Montserrat"] font-bold text-[20px]'>Price</h3>
        <div
          onClick={handleDropdown}
          className={`cursor-pointer ${
            isDropdownOpen ? "rotate-180" : ""
          } transition-transform duration-300`}
        >
          <ArrowDown />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="mt-6">
          <div className="flex justify-between mb-[30px] gap-3">
            <div className="w-[124px] py-[25px] px-[42px] border border-[rgba(48,48,48,0.25)] rounded-[10px] bg-[#f4f4f4] flex items-center text-[#303030] text-center text-base leading-6">
              <span className="mr-1 font-'Montserrat' font-semibold">$</span>
              <input
                type="number"
                value={minValue}
                min={0}
                max={1000}
                onChange={(e) => updatevalue("min", e.target.value)}
                style={{
                  MozAppearance: "textfield",
                  appearance: "textfield",
                  border: "none",
                  outline: "none",
                }}
                className="hide-number-arrows"
              />
            </div>
            <div className="w-[124px] py-[25px] px-[42px] border border-[rgba(48,48,48,0.25)] rounded-[10px] bg-[#f4f4f4] flex items-center text-[#303030] text-center text-base leading-6">
              <span className="mr-1 font-'Montserrat' font-semibold">$</span>
              <input
                type="number"
                value={maxValue}
                min={0}
                max={1000}
                onChange={(e) => updatevalue("max", e.target.value)}
                style={{
                  MozAppearance: "textfield",
                  appearance: "textfield",
                  border: "none",
                  outline: "none",
                }}
                className="hide-number-arrows"
              />
            </div>
          </div>
          <div className="relative w-full h-[2px] bg-[#e8e8e8] rounded">
            <div
              className="absolute h-full bg-red-500 rounded"
              style={{
                left: `${minPercent}%`,
                width: `${maxPercent - minPercent}%`,
              }}
            ></div>
            <input
              type="range"
              min="0"
              max={1000}
              value={minValue}
              step="10"
              onChange={(e) => updateSlider("min", e.target.value)}
              className="absolute w-full h-[2px] bg-transparent pointer-events-none appearance-none"
              style={{}}
            />
            <input
              type="range"
              min="0"
              max={1000}
              value={maxValue}
              step="10"
              onChange={(e) => updateSlider("max", e.target.value)}
              className="absolute w-full h-[2px] bg-transparent pointer-events-none appearance-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceRange;
