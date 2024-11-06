import React from 'react';
import Image from 'next/image';
import Styles from './index.module.scss';
import { CARD } from '@/contentful/type/common';

const ProgramsCard = ({ collection }: any) => {
  return (
    <div className={`${Styles.gap24} rowFlex`}>
      {collection?.map(({ title, backgroundImage, iconClass }: CARD) => (
        <div className={`columnMd3 columnSm6 ${Styles.mb24} ${Styles.programCard}`}>
          <div className={Styles.cardCon}>
            {backgroundImage && (
              <div className={Styles.image}>
                <Image
                  src={backgroundImage?.image?.url}
                  height={backgroundImage?.image?.height}
                  width={backgroundImage?.image?.width}
                  alt={backgroundImage?.alt}
                />
              </div>
            )}
            {iconClass && (
              <div className={Styles.iconClasss}>
                <span className={iconClass}></span>
              </div>
            )}
            {title && (
              <div className={Styles.cardTitle}>
                <p>{title}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramsCard;
