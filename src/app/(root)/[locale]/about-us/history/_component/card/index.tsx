import React from 'react';
import Image from 'next/image';
import Styles from './index.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const HistoryCard = ({ title, imagesCollection, description }: any) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardTitle}>
        <h3 className="h5">{title}</h3>
      </div>
      <div className={Styles.imageCon}>
        <Image
          src={imagesCollection?.image.url}
          alt={imagesCollection?.alt}
          height={341}
          width={503}
        />

        {/* <div className={Styles.cardIcon}></div> */}
        <div className={Styles.cardContent}>
          {description?.json
            ? documentToReactComponents(description?.json)
            : description}
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
