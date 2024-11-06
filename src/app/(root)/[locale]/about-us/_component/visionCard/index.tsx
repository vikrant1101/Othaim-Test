import React from 'react';
import Image from 'next/image';
import Styles from './index.module.scss';
const VisionCard = ({ title, subTitle, backgroundImage, iconClass }: any) => {
  return (
    <div className="columnMd6">
      <div
        className={`${Styles.InnerBannerImg} ${iconClass == 'green' ? Styles.green : Styles.lightgreen} rowFlex  alignItemsCenter`}
      >
        <div className={`${Styles.InnerBannerText}   column`}>
          {title && <h2 className="h2">{title}</h2>}
          {subTitle && <p>{subTitle}</p>}
        </div>
        <div className="dFlex alignItemsCenter">
          <Image
            src={backgroundImage?.image?.url}
            height={112}
            width={128}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default VisionCard;
