import React from 'react';
import Styles from './index.module.scss';
import Image from 'next/image';
import Button from '@/components/Button';
import TextEllipsis from '@/components/TextEllipse';

const Card = ({ items }: any) => {
  return (
    <div className={Styles.cardl}>
      <div className={Styles.cardImgCon}>
        <Image
          src={items?.image?.url}
          height={items?.image?.height}
          width={items?.image?.width}
          alt={items?.alt}
          className={Styles.cardImagel}
        />
      </div>
      {/* <div className={Styles.cardContentl}>
        <p className={Styles.datel}>{items?.date}</p>
        <TextEllipsis className={'textEllipsis'}>
          <h6 className={Styles.titlel}> {itm?.title}</h6>
        </TextEllipsis>
        <Button
          varient="LinkWithArrow"
          className={Styles.buton}
          showIcon={true}
        />
      </div> */}
    </div>
  );
};

export default Card;
