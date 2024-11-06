'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import NavList from './navList';
import Divider from '../Divider';
import MobileMenu from './MobileMenu';
const BottomRightHeader = ({
  style,
  locale,
  menuCollection,
  logo,
  languageCollection,
  setIsSearch,
  isSearch,
}: any) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className={`dFlex gap48   ${style.buttonRightHeader}`}>
        <div className={`justifyContentBetween dFlex  ${style.menuList}`}>
          <NavList style={style} menuCollection={menuCollection} />
        </div>
        <Divider
          className={style.divider}
          isVertical
          style={{ height: '32px !important' }}
        />
        <div>
          <span
            className={`icon-search ${style.IconSearch}`}
            onClick={() => setIsSearch(!isSearch)}
          ></span>
        </div>
        <div className={style.menuMb}>
          <Image
            onClick={() => setVisible(!visible)}
            height={32}
            width={32}
            src={'/img/menu.svg'}
            alt={'search'}
          />
        </div>
      </div>
      <MobileMenu
        locale={locale}
        logo={logo}
        visible={visible}
        setVisible={setVisible}
        menuCollection={menuCollection}
        languageCollection={languageCollection}
      />
    </>
  );
};

export default BottomRightHeader;
