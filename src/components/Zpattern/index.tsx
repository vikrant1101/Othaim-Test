import React from 'react';
import Styles from './index.module.scss';
import SingleCard from '../cards/card2';
import Image from 'next/image';
interface Props {
  title?: any;
  description?: any;
  imgData?: any;
  collection?: any;
  reverse?: any;
}
export const Zpattern = ({ dataCollection, reverse }: any) => {
  const title = dataCollection?.title;
  const description = dataCollection?.description;
  const imgData = dataCollection?.backgroundImage;
  return (
    <div className={`${Styles.aboutCompany} containerXL innerSpace`}>
      <div
        className={`${Styles.gap24} ${reverse ? Styles.reverse : ''} rowFlex  rowGutters12`}
      >
        <div className="columnLg6">
          <SingleCard
            title={title}
            description={description}
          />
        </div>
        <div className="columnLg6">
          <Image
            src={imgData?.image?.url}
            alt={imgData?.alt || 'aboutCompany'}
            height={imgData?.image?.height}
            width={imgData?.image?.width}
          />
        </div>
      </div>
    </div>
  );
};

export default Zpattern;
