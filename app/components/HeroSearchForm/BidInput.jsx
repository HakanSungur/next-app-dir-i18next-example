
import { useState, useEffect } from "react";
import Input from "../../shared/Input/Input";
import secureLocalStorage from "react-secure-storage";

const BidInput = ({
  defaultValue,
  autoFocus = false,
  onChange,
  placeHolder = "Bid amount",
  className = "nc-flex-1.5",
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

  return (
    <div className={`relative flex ${className}`}>
      <div
        className={`flex flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  
        }`}
      >
        <div className="text-neutral-300 dark:text-neutral-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="nc-icon-field"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              // d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div className="flex-grow">
          <div className="relative">
            <Input
              name="offerAmount"
              className="!pl-3 !pr-0"
              placeholder={placeHolder}
              min="1"
              type="number"
              onKeyDown={(e) =>
                ["e", "E", "+", "-", ".", ","].includes(e.key) &&
                e.preventDefault()
              }
              onChange={(e) => setValue(e.currentTarget.value)}
            />

            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">
                {secureLocalStorage.getItem("currencyName")}
              </span>
            </div>
          </div>
          <span className="block mt-0.5 text-sm text-neutral-400 font-light "></span>
        </div>
      </div>
    </div>
  );
};

export default BidInput;
