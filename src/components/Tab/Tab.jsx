import React from 'react';
import PropTypes from 'prop-types';

export default function Tab({ tabName, activeTab, onClick }) {
  const buttonClasses = `relative font-inter text-base leading-normal font-medium text-neutral-500 group ${
    tabName === activeTab ? 'focus:text-neutral-50' : ''
  }`;

  const activeButtonClass = `absolute block w-16 h-1 rounded-4xl bg-twitter-blue-default ${
    tabName === activeTab ? 'visible' : 'invisible'
  } mt-4`;

  const handleClick = () => {
    onClick(tabName);
  };

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {tabName}
      <div className={activeButtonClass} />
    </button>
  );
};

Tab.propTypes = {
  tabName: PropTypes.string,
  activeTab: PropTypes.string,
  onClick: PropTypes.func,
};