import React, {useState} from 'react' 
import SuccessLogo from '../../assets/tick-circle.svg'; 
import PasswordEye from '../../assets/eye.svg'; 
import HideEye from '../../assets/hide-eye.svg'; 

import PropTypes from 'prop-types';

export default function Input({ 
  children, 
  type, 
  inputValue, 
  onChange, 
  validationStatus=false, 
  ...rest}) {
    
  const [showPassword, setShowPassword] = useState(false); 
  
  const elementPadding = `${rest.padding ? rest.padding : ""}`; 
  const elementWidth = `${rest.width ? rest.width : "w-64"}`; 
  const size = `${elementWidth} ${elementPadding}`; 

  return (
  <>
    <div className={size}>
      <fieldset className="py-3 px-3 pt-2 items-center gap-2.5 rounded-md border border-solid border-neutral-500 group focus-within:border-twitter-blue-default">

        <legend className="text-neutral-500 font-medium font-inter text-xs group-focus-within:text-twitter-blue-default not-italic">
          <div className="px-2">
            {children}
          </div>
        </legend>
        <div className="flex justify-around">
          <input 
            id={rest.id} 
            className="w-full peer font-normal font-inter text text-neutral-100 border-none bg-transparent focus: outline-none placeholder:text-neutral-500 appearance-none " 
            type={showPassword ? 'text' : type}
            placeholder={children}
            onChange={onChange}
          {...rest}
          />

          {type==="password" && !validationStatus && (
            <>
            <button
            type="button"
            className="group aspect-square h-max w-max rounded-full bg-transparent hover:brightness-125"
            onClick={()=>{setShowPassword(!showPassword); }}
            >
              {!showPassword ? (<img className="cursor-pointer" src={PasswordEye} alt="password-eye"/>) : (
                <img className="cursor-pointer" src={HideEye} alt="password-hide-eye"/>
              )}
            </button>
            </>
            )
          }

          {validationStatus && (<img src={SuccessLogo} alt="Success" className="w-7 h-7" />)}
        </div>
      </fieldset>
    </div>
  </>
  );
};

Input.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  validationStatus: PropTypes.bool,
  rest: PropTypes.object,
};