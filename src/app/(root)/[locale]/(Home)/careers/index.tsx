import React from 'react';
import Image from 'next/image';
import Styles from './index.module.scss';
import SingleCard from '@/components/cards/card2';

const Careers = ({ careers }: any) => {
  return (
    <div className={Styles.careersBgCon}>
      <div className={Styles.leafImgCon}>
        <Image
          src={'/img/leaf.png'}
          alt="leaf"
          height={140}
          width={640}
          role="presentation"
        />
      </div>
      <div className={'containerXL'}>
        <div className={`${Styles.readLattestMainCon} sectionSpace`}>
          <div className="rowFlex justifyContentBetween">
            <div className="columnMd6">
              <div className={Styles.imageCon}>
                {careers?.imagesCollection?.items[0] ? (
                  <Image
                    src={careers?.imagesCollection?.items[0]?.image?.url}
                    height={careers?.imagesCollection?.items[0]?.image?.height}
                    width={careers?.imagesCollection?.items[0]?.image?.width}
                    alt={careers?.imagesCollection?.items[0]?.alt}
                  />
                ) : null}
                <div className={`${Styles.btmCard} posLeft`}>
                  <div className={Styles.btmCardInfo}>
                    {careers?.subTitle ? <h4>{careers?.subTitle}</h4> : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="columnMd6">
              <div className={Styles.careerCon}>
                <SingleCard
                  badgeTitle={careers?.badgeTitle}
                  title={careers?.title}
                  description={careers?.description}
                  linksCollection={careers?.linksCollection}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
