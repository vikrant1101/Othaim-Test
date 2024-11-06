import React from 'react';
import MenuList from '@/components/MenuList/index';
const NavList = ({ style, menuCollection }: any) => {
  return (
    <div className={`customDflex  ${style.menuListSub}`}>
      <MenuList menuCollection={menuCollection} />
    </div>
  );
};

export default NavList;
