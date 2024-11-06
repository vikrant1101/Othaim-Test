import React from 'react';
import Styles from './index.module.scss';
import Button from '@/components/Button';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Interface } from 'readline';
interface singleCard {
  badgeTitle?: string;
  title?: string;
  description?: any;
  linksCollection?: any;
  style?: any;
}
const SingleCard = ({
  badgeTitle,
  title,
  description,
  linksCollection,
  style,
}: singleCard) => {
  return (
    <div className={`${Styles.careerCon} careerCon`} style={{ ...style }}>
      {badgeTitle ? (
        <p className={`${Styles.badgeTitle} h6`}>{badgeTitle}</p>
      ) : null}
      {title ? <h2>{title}</h2> : null}
      <div className={`${Styles.descriptionCon} descriptionCon`}>
        {description ? documentToReactComponents(description?.json) : null}
      </div>

      <div className="dFlex">
        {linksCollection &&
          linksCollection?.items?.map((itm: any, idx: number) => (
            <Button
              key={`linksCollection-${idx}`}
              className={Styles.btn}
              link={itm?.url}
              varient={itm?.variant}
              label={itm?.title}
              target={itm?.target}
            />
          ))}
      </div>
    </div>
  );
};

export default SingleCard;
