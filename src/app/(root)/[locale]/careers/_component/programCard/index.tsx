import React from 'react';
import Image from 'next/image';
import Styles from './index.module.scss';

const ProgramsCard = ({ collection }: any) => {
  return (
    <div className={`${Styles.gap24} rowFlex`}>
      {collection?.map(({ title, backgroundImage }: any) => (
        <div className={`columnXl3 columnMd6 ${Styles.programCard}`}>
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
