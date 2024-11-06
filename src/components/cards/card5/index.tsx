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
  recipeTime,
  customClass,
  ingredientsCount,
}: any) => {
  // Use the hook directly in the component
  useEqualHeight(['equalHeading', 'equalContent'], 100);

  return (
    <div className={`${Styles.card} ${customClass}`}>
      {imagesCollection?.image?.url && (
        <Image
          src={imagesCollection.image.url}
          alt={imagesCollection.alt || 'Image'}
          height={278}
          width={384}
        />
      )}

      <div className={Styles.cardContent}>
        {title && <h6 className="equalHeading">{title}</h6>}

        <p className="equalContent">
          {description?.json
            ? documentToReactComponents(description.json)
            : description}
        </p>

        {linksCollection && (
          <>
            <Divider isHorizontal />
            <div className={Styles.cardFooter}>
              <div className={Styles.rowFlex}>
                <div className={Styles.column6}>
                  <Button
                    type="Span"
                    label={ingredientsCount}
                    className={Styles.button}
                    startImg
                    imgAlt="Chef"
                    imgUrl="/img/chef.svg"
                    imgHeight={15}
                    imgWidth={15}
                  />
                </div>

                <div className={Styles.column6}>
                  <Button
                    type="Span"
                    label={recipeTime}
                    className={Styles.button}
                    startImg
                    imgAlt="Clock"
                    imgUrl="/img/clock.svg"
                    imgHeight={15}
                    imgWidth={15}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
