import React, { useState } from 'react';
import Tab from './Tab';

export default function TabList({ initialActiveTab = "For You" }) {
  const [currentActive, setCurrentActive] = useState(initialActiveTab);

  const handleOnClick = (tabName) => {
    setCurrentActive(tabName);
  };

  return (
    <nav className="w-full flex px-20 py-5 justify-center items-center self-stretch border-b border-b-neutral-700 gap-20">
      <Tab tabName="For You" activeTab={currentActive} onClick={handleOnClick} />
      <Tab tabName="Following" activeTab={currentActive} onClick={handleOnClick} />
    </nav>
  );
}
