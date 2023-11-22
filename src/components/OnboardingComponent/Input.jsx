import React, {useState} from 'react'
import SuccessLogo from '../../images/tick-circle.svg'; 
import ChevronDownIcon from "../../images/chevron-down.svg";

function Input({
    children, 
    type,
    ...rest
}) {

    const [value, setValue] = useState(''); 
    const [currentStatus, setCurrentStatus] = useState('empty'); //empty, typing, success, error
    const [error, setError] = useState('');

    const { options = [] } = rest;

    const validateText = (text) => {
        const minLength = 3;
        if (!text || text.trim().length < minLength) {
            setCurrentStatus("error"); 
            return "Text must be at least 3 characters long";
        }
        setCurrentStatus("success"); 
        return "";
    };
    
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setCurrentStatus("error"); 
            return "Invalid email format";
        }
        setCurrentStatus("success"); 
        return "";
    };

    const validateDate = (dateString) => {
        const inputDate = new Date(dateString);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time part for a fair comparison
    
        if (inputDate < today) {
            setCurrentStatus("error"); 
            return "Date cannot be in the past";
        }
        setCurrentStatus("success"); 
        return "";
    };
    
    const validateInput = () => {
        let errorMessage = '';

        switch (type) {
            case 'text':
                errorMessage = validateText(value);
                break;
            case 'email':
                errorMessage = validateEmail(value);
                break;
            case 'date':
                errorMessage = validateDate(value);
                break;
            // Add more cases as needed for different types
            default:
                break;
        }

        if (errorMessage) {
            setCurrentStatus('error');
        } else {
            setCurrentStatus('success');
        }

        setError(errorMessage);
    };


    const fieldSetClass = `
        py-4 px-3 items-center gap-2.5 rounded-md border border-solid 
        ${currentStatus !== "error" ? "border-neutral-500" : "border-red-error"} group 
        ${currentStatus !== "error" ? "focus-within:border-twitter-blue-default" : "focus-within:border-red-error"} 
        ${currentStatus === "success" ? "border-twitter-blue-default" : "border-neutral-500"}`; 

    const legendClasses = `
        ${currentStatus === "success" ? "text-twitter-blue-default" : "text-neutral-500"} 
        ${currentStatus !== "error" ? "text-neutral-500" : "text-red-error"} 
        font-medium font-inter text-xs group-focus-within:text-twitter-blue-default 
        ${currentStatus !== "error" ? "group-focus-within:text-twitter-blue-default" : "group-focus-within:text-red-error"}`; 
    
    //const elementPadding = `${rest.padding ? rest.padding : "p-3"}`; 
    const elementWidth = `${rest.width ? rest.width : "w-full"}`; 
    const size = `${elementWidth}`; 

    const inputField = type === 'select' ? (
        <div className="relative w-full">
          <select
            className="w-full font-normal font-inter text-xl text-neutral-100 bg-transparent focus:outline-none appearance-none pr-10"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setCurrentStatus('typing');
            }}
            onBlur={() => {
              
            }}
            {...rest}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <img 
            src={ChevronDownIcon} 
            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" 
            alt="Dropdown arrow"
          />
        </div>
      ) : (
        <input
          className="w-full peer font-normal font-inter text-xl text-neutral-100 border-none bg-transparent focus:outline-none placeholder:text-neutral-500"
          type={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setCurrentStatus('typing');
          }}
          onBlur={validateInput}
          {...rest}
        />
      );
    
    return (
    <>
    {error && <p className="text-red-500">{error}</p>}
    <div className={size}>
        <fieldset className={fieldSetClass} >
            <legend className={legendClasses}>
                <div className="px-1">
                    {children}
                </div>
            </legend>
            <div className="flex justify-around">
                {inputField}
                {currentStatus === "success" && type !== 'select' && (<img src={SuccessLogo} alt="Success" className="w-7 h-7" />)}
            </div>
        </fieldset>
    </div>
    </>
    );
}

export default Input