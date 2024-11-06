"use client";
import React, { useState, useEffect } from 'react';
import Styles from './index.module.scss';
import useEqualHeight from '@/util/hooks/useEqualHeight'; 

interface TabProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const equalHeight = useEqualHeight(['tabPanel']); 

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    equalHeight(); // Call equalHeight when changing the active tab
  }, [activeIndex, equalHeight]); 

  return (
    <div className="containerXL innerSpaceSm">
      <div className={Styles.mainTabPanel}>
        <div className={`rowFlex ${Styles.tabContent}`}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`${Styles.tabButton} ${activeIndex === index ? Styles.active : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className={Styles.tabPanel}>
          {tabs[activeIndex].content}
        </div>
      </div>
    </div>
  );
};

export default Tab;
