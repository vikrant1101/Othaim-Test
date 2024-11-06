'use client';
import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { usePathname } from 'next/navigation';
const MenuList = ({ menuCollection }: any) => {
  const pathname = usePathname();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setOpenIndex(index);
  const handleMouseLeave = () => setOpenIndex(null);
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setOpenIndex(openIndex === index ? null : index);
    }
  };
  useEffect(() => {
    setOpenIndex(null);
  }, [pathname]);
  return (
    <ul className={Styles.menu}>
      {menuCollection?.items?.map(
        ({ title, isDropdown, dropdownCollection, url }: any, idx: any) => {
          const urlTitle = pathname
            .toLocaleLowerCase()
            .split('-')
            .join('')
            .includes(title.toLocaleLowerCase().split(' ').join(''));
          return (
            <li
              key={`menuCollection-${idx}`}
              className={Styles.menuItem}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter(idx)}
              onBlur={handleMouseLeave}
            >
              <>
                <Link
                  href={url}
                  aria-haspopup="true"
                  aria-expanded={openIndex === idx}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className={`${Styles.menuButton} ${openIndex === idx ? Styles.menuopen : ''} ${urlTitle || openIndex === idx ? Styles.active : ''} `}
                >
                  {title}
                  {isDropdown ? (
                    <span className="icon-angle-down"></span>
                  ) : null}
                </Link>
                {isDropdown ? (
                  <ul
                    className={`${Styles.submenu} ${openIndex === idx ? Styles.open : ''}`}
                  >
                    {dropdownCollection?.items?.map(
                      ({ title, url, iconClass }: any, subIndex: number) => (
                        <li key={subIndex}>
                          {title && (
                            <Button
                              className={`${Styles.imageCon} `}
                              link={url}
                              label={title}
                              startIcon={true}
                              iconClass={iconClass}
                            />
                          )}
                          {/* <Link href={url}>
                            <span className={Styles.imageCon}>
                              <Image
                                src={'/img/meuFrame.svg'}
                                width={18}
                                height={24}
                                alt=""
                              />
                            </span>
                            {title}
                          </Link> */}
                        </li>
                      )
                    )}
                  </ul>
                ) : null}
              </>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default MenuList;
