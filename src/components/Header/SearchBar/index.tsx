'use client'
import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss';
import { SearchBar } from '@/components/SearchBar';

const Search = ({ isSearch }: any) => {
  const [showMe, setShowMe] = useState(isSearch);

  useEffect(() => {
    setShowMe(isSearch);
  },[isSearch])
  const handleSearchSubmit = () => {
    setShowMe(false); 
  };
  
  return (
    <div className={`${Styles.searchMain} ${showMe ? Styles.open : ''} `}>
      <div className="containerXL">
        <div className={Styles.searchWrapper}>
          <SearchBar placeholder="Type your keyword here..." onSearch={handleSearchSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Search;
