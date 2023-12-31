import React from 'react';
import PropTypes from 'prop-types';

export default function Button ({children, variant = 'solid', type = 'primary', isDisabled = false, ...rest}) {
  const styles = {
    common: `inline-flex justify-center items-center rounded-full shadow-lc ${rest.padding ? rest.padding : "px-6 py-2"} m-2 font-bold text-base leading-normal font-inter ${rest.width ? rest.width : "w-80"} ${rest.gap ? rest.gap : ""} ${rest.position ? rest.position : ""} ${rest}`,

    variants: {
      solid: type === 'primary' ? 'bg-twitter-blue-default hover:bg-twitter-blue-hover sm:hover:bg-twitter-blue-hover md:hover:bg-twitter-blue-hover' : 'bg-neutral-50 hover:bg-neutral-200 sm:hover:bg-neutral-500 md:hover:bg-neutral-500',
      
      outline: type === 'primary' ? 'border border-solid border-custom-stroke text-twitter-blue-default' : 'border border-solid border-custom-stroke text-neutral-50',
      
      icon: type === 'primary' ? 'bg-twitter-blue-default hover:bg-twitter-blue-hover sm:hover:bg-twitter-blue-hover md:hover:bg-twitter-blue-hover p-3 rounded-full' : 'bg-neutral-50 hover:bg-neutral-200 p-3 rounded-full',
    },

    disabled: isDisabled ? 'opacity-50 cursor-not-allowed' : '',
    
    textColor: type === 'primary' ? 'text-neutral-50' : 'text-neutral-1000',
  };

  const variantClass = styles.variants[variant];
  const disabledClass = styles.disabled;
  const textColor = styles.textColor;

  const classes = `${styles.common} ${variantClass} ${disabledClass} ${textColor}`;
  
  return (
    <button className={classes} disabled={isDisabled} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  rest: PropTypes.object,
};

