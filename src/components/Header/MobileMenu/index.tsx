'use cleint';
import React, { useEffect } from 'react';
import Styles from './index.module.scss';
import Image from 'next/image';
import Language from '@/components/Language';
import { Accordion, AccordionItem } from '@/components/Accordion';
import { usePathname } from 'next/navigation';
const MobileMenu = ({
  logo,
  locale,
  visible,
  setVisible,
  menuCollection,
  languageCollection,
}: any) => {
  const pathname = usePathname();
  useEffect(() => {
    setVisible(false);
  }, [pathname]);
  return (
    <div
      className={`${Styles.mobilemenu} ${visible ? Styles.open : ''} ${locale == 'ar' && !visible ? Styles.arTransition : ''}`}
    >
      <div className={`${Styles.mobileMenuCon} mobileMenuCon dFlex `}>
        <div className="dFlex justifyContentBetween ">
          <div className={`alignItemsCenter dFlex`}>
            <Image
              className={Styles.headerLogo}
              src={logo?.image?.url}
              alt={logo?.alt}
              height={logo?.image?.height}
              width={logo?.image?.width}
            />
          </div>
          <Image
            onClick={() => setVisible(false)}
            className={Styles.cross}
            src={'/img/greenCross.svg'}
            alt={'greenCross.svg'}
            height={32}
            width={24}
          />
        </div>
        <div className={Styles.accordion}>
          <Accordion>
            {menuCollection?.items?.map(
              (
                { title, isDropdown, url, dropdownCollection }: any,
                idx: number
              ) => (
                <AccordionItem
                  key={`menuCollection-${idx}`}
                  headerAsLink
                  url={url}
                  isDropdown={isDropdown}
                  dropdownCollection={dropdownCollection?.items}
                  title={title}
                />
              )
            )}
          </Accordion>
        </div>
        <div className={`dFlex justifyContentEnd ${Styles.language}`}>
          <Language locale={locale} languageCollection={languageCollection} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
