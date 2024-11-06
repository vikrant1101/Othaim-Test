'use client';
import React from 'react';
import Styles from './index.module.scss';
import Button from '@/components/Button';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SingleCard from '@/components/cards/card2';
import { UseMediaQuery } from '@/util/hooks/useMediaQuery';

const OurMission = ({ ourMission }: any) => {
  const matchMedia = UseMediaQuery('766.99');
  const matches = !!matchMedia;

  return (
    <div className={`${Styles.ourMissionCon}`}>
      <div className={Styles.bgImageCon}>
        {ourMission?.backgroundImage?.image?.url ? (
          <Image
            src={
              matches
                ? ourMission?.mobileBackground?.image?.url
                : ourMission?.backgroundImage?.image?.url
            }
            alt={ourMission?.backgroundImage?.alt}
            fill
          />
        ) : null}
      </div>

      <div className={`${Styles.ourMissionContentCon} `}>
        <div className="containerXL">
          <div className={`rowFlex ${Styles.ourMissionTop}`}>
            <div className="columnMd10 columnLg7">
              <div className={Styles.aboutCompanyWrp}>
                <div className={Styles.aboutCompanyCon}>
                  <SingleCard
                    badgeTitle={ourMission?.badgeTitle}
                    title={ourMission?.title}
                    description={ourMission?.description}
                    linksCollection={ourMission?.linksCollection}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
