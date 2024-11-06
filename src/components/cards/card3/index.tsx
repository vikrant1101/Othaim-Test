import React from 'react';
import Styles from './index.module.scss';
import Image from 'next/image';
import Button from '@/components/Button';
import useEqualHeight from '@/util/hooks/useEqualHeight';
interface Card {
  title: string;
  imagesCollection: any;
  description: any;
  linksCollection: any;
  locale?: any;
}
const Card = ({ title, imagesCollection, linksCollection, locale }: Card) => {
  useEqualHeight(['equalHeading', 'equalContent', 'equalCard'], 100);
  return (
    <div className={`${Styles.card} `}>
      {title && (
        <div className={`${Styles.cardTile} equalTitle`}>
          <p className='equalHeading'>{title}</p>
        </div>
      )}
      {imagesCollection && (
        <div className={Styles.cardImg}>
          <Image
            src={imagesCollection.items[0]?.image?.url}
            width={imagesCollection.items[0]?.image?.width}
            height={imagesCollection.items[0]?.image?.height}
            alt={imagesCollection.items[0]?.alt}
          />
        </div>
      )}
      {linksCollection && (
        <div className={Styles.cardFooter}>
          <Button
            varient={'LinkWithArrow'}
            label={linksCollection?.items[0]?.title}
            link={linksCollection?.items[0]?.url}
            iconClass={'icon-arrow'}
            showIcon={true}
            className={Styles.btnLink}
            target={linksCollection?.items[0]?.target}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
