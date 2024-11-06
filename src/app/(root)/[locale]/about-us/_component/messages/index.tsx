'use client';
import React from 'react';
import Image from 'next/image';
import Divider from '@/components/Divider';
import Styles from './index.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import useEqualHeight from '@/util/hooks/useEqualHeight';
const Messages = ({
  messages,
  description,
  authorTitle,
  authorDesignation,
  authorImg,
}: any) => {
  useEqualHeight(['equalHeading', 'equalContent', 'equalCard']);
  return (
    <div className={`columnLg6  ${Styles.equalCard}`}>
      <div className={`${Styles.messagesCon} equalCard`}>
        <div className={Styles.messagesHeader}>
          <h2 className="h4">{messages}</h2>
          <div className={`${Styles.descriptionCon} descriptionCon`}>
            {description ? documentToReactComponents(description?.json) : null}
          </div>
        </div>
        <div>
          <Divider isHorizontal />
          <div className={Styles.messagesFooter}>
            <div className="rowFlex rowGutters12">
              <div className="columnAuto">
                <Image src={authorImg} height={64} width={64} alt="" />
              </div>

              <div className="column">
                <div className={`${Styles.authorTitle} equalContent`}>
                  <p>{authorTitle}</p>
                </div>
                <div className={`${Styles.authorDesignation} equalHeading`}>
                  <p>{authorDesignation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
