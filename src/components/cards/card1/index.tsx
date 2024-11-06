'use client';

import React from 'react';
import Styles from './index.module.scss';
import Image from 'next/image';
import Button from '@/components/Button';
import Divider from '@/components/Divider';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import useEqualHeight from '@/util/hooks/useEqualHeight';

const Card = ({
  description,
  imagesCollection,
  linksCollection,
  title,
  iconClass,
}: any) => {
  useEqualHeight(['equalHeading', 'equalContent', 'equalCard'], 100);

  return (
    <div className={`${Styles.card} equalCard`}>
      {iconClass && (
        <div className={Styles.iconClass}>
          <span className={iconClass}></span>
        </div>
      )}

      {/* Conditional rendering for images */}
      {imagesCollection?.items?.[0]?.image?.url && (
        <div className={Styles.cardIcon}>
          <Image
            src={imagesCollection.items[0].image.url}
            alt={imagesCollection.items[0].alt || 'Image'}
            height={imagesCollection.items[0].image.height || 278}
            width={imagesCollection.items[0].image.width || 384}
          />
        </div>
      )}

      {/* Alternative image render */}
      {imagesCollection?.image?.url && (
        <div className={Styles.cardIcon}>
          <Image
            src={imagesCollection.image.url}
            alt={imagesCollection.alt || 'Image'}
            height={imagesCollection.image.height || 278}
            width={imagesCollection.image.width || 384}
          />
        </div>
      )}

      <div className={Styles.cardContent}>
        {title && <h3 className="equalHeading h6">{title}</h3>}

        <div className={`${Styles.equalContent} equalContent`}>
          {description?.json
            ? documentToReactComponents(description.json)
            : description}
        </div>
      </div>

      {linksCollection?.items?.[0]?.title && (
        <>
          <Divider isHorizontal />
          <div className={Styles.cardFooter}>
            <Button
              varient={linksCollection.items[0].variant}
              label={linksCollection.items[0].title}
              className={Styles.learnMore}
              showIcon={true}
              target={linksCollection.items[0].target}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
