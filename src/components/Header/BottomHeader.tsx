'use client';
import Image from 'next/image';
import BottomRightHeader from './bottomRightHeader';
import { useState } from 'react';
import Link from 'next/link';
import Search from './SearchBar';
import { Suspense } from 'react';
export default function BottomHeader({
  locale,
  style,
  logo,
  menuCollection,
  actionCollection,
  languageCollection,
}: any) {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <div className={`containerXL ${style.bottonHeader} `}>
        <div
          className={`${style.mbPadding} rowFlex rowGutters12 alignItemsCenter`}
        >
          <div className="columnXl2 column">
            <div className={`alignItemsCenter dFlex`}>
              <Link locale={locale} href={'/'}>
                <Image
                  className={style.headerLogo}
                  src={logo?.image?.url}
                  alt={logo?.alt}
                  height={logo?.image?.height}
                  width={logo?.image?.width}
                />
              </Link>
            </div>
          </div>
          <div className="columnXl10 columnAuto">
            <BottomRightHeader
              setIsSearch={setIsSearch}
              isSearch={isSearch}
              style={style}
              logo={logo}
              locale={locale}
              actionCollection={actionCollection}
              menuCollection={menuCollection}
              languageCollection={languageCollection}
            />
          </div>
        </div>
      </div>
      <Suspense>
        <Search isSearch={isSearch} />
      </Suspense>
    </>
  );
}
