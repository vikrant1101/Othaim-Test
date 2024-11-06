'use client';
import React from 'react';
import Image from 'next/image';
import Styles from './index.module.scss';
import useEqualHeight from '@/util/hooks/useEqualHeight';
const TeamCard = ({ teamsCollection }: any) => {
  useEqualHeight(['equalHeading', 'equalContent', 'equalCard']);
  return (
    <div className="rowFlex rowGutters12">
      {teamsCollection?.map(
        ({ title, designation, thumbnail }: any, idx: number) => (
          <div className="columnXl3 columnMd4" key={`teamsCollection-${idx}`}>
            <div className={`${Styles.card} `}>
              <Image
                src={thumbnail?.image?.url || ''}
                alt={thumbnail?.alt || ''}
                height={thumbnail?.image?.height}
                width={thumbnail?.image?.width}
              />
              <div className={Styles.cardContent}>
                <h3 className="equalHeading h6">{title}</h3>
                <p className="equalContent">{designation}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TeamCard;
