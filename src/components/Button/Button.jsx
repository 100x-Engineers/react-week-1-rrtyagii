import React from 'react';

const Button = ({ variant, label, color, textColor, size }) => {
  // Define default styles and override them based on the props
  const styles = {
    common: `
      inline-flex justify-center items-center 
      rounded-3xl shadow-lc backdrop-blur-2xl gap-2.5
      font-bold text-base leading-normal m-5 
    `,
    sizes: {
      small: 'px-5 py-2 w-36',
      medium: 'px-6 py-2 w-80',
      large: 'px-6 py-3 w-100',
    },
    variants: {
      solid: `bg-${color}-default hover:bg-${color}`,
      outline: `border border-solid border-custom-stroke`,
      blurred: `bg-${color}-default hover:bg-${color} backdrop-blur-2xl`,
    },
    textColors: `text-${textColor}`,
  };

  const sizeClass = styles.sizes[size] || styles.sizes.medium;  // Default size: medium
  const variantClass = styles.variants[variant] || styles.variants.solid;  // Default variant: solid
  
  const classes = `
    ${styles.common}
    ${sizeClass}
    ${variantClass}
    ${styles.textColors}
  `;

  return (
    <button className={classes}>
      <div className="text-center">
        {label}
      </div>
    </button>
  );
};

export default Button;
