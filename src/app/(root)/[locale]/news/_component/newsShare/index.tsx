"use client";
import React from 'react';
import Styles from './index.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const NewsShare = () => {

  const pathname = usePathname()
  const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;
  //  Social media share URLs
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
  const instagramShareUrl = `https://www.ins  tagram.com/?url=${encodeURIComponent(currentUrl)}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
  const handlePrint = (event: any) => {
    event.preventDefault();
    window.print();
  };

  return (

    <div className={`${Styles.socialSharePanel} dFlex gap16 alignItemsCenter justifyContentEndMd`}>
      <h6>Share</h6>
      <div className='shareMedia dFlex gap16 alignItemsCenter'>
        <ul className='dFlex gap10'>
          <li className={`${Styles.icon}`}>
            <Link href={facebookShareUrl} className='icon-facebook' target="_blank" rel="noopener noreferrer"></Link>
          </li>
          <li className={`${Styles.icon}`}>
            <Link href={twitterShareUrl} className="icon-x" target="_blank" rel="noopener noreferrer"></Link>
          </li>
          <li className={`${Styles.icon} ${Styles.mailIcon}`}>
            <Link href={instagramShareUrl} target="_blank" className="icon-mail" rel="noopener noreferrer"></Link>
          </li>
          <li className={`${Styles.icon} ${Styles.mailIcon}`}>
            <Link href={whatsappShareUrl} target="_blank" className="icon-whatsapp" rel="noopener noreferrer"></Link>
          </li>
        </ul>
        <div className={`${Styles.printPanel}`}>
          <Link href={`${currentUrl}/download.pdf`} target="_blank" className="icon-print" rel="noopener noreferrer" onClick={handlePrint}></Link>
        </div>
      </div>
    </div>
  );
}

export default NewsShare;
