// CardRenderer.js
import React from 'react';
import CardOne from './card1/index';
import CardTwo from './card2/index';
import CardThree from './card3/index';
import CardFour from './card4/index';
import CardFive from './card5/index';

const Card = ({
  iconClass,
  variant,
  title,
  imagesCollection,
  description,
  linksCollection,
  recipeTime,
  items,
  badgeTitle,
  customClass,
  titleClass,
  ingredientsCount,
}: any) => {
  switch (variant) {
    case 'two':
      return (
        <CardTwo
          badgeTitle={badgeTitle}
          title={title}
          description={description}
          linksCollection
        />
      );
    case 'three':
      return (
        <CardThree
          title={''}
          imagesCollection={imagesCollection}
          description={description}
          linksCollection={linksCollection}
        />
      );
    case 'four':
      return <CardFour items={items} />;
    case 'five':
      return (
        <CardFive
          description={description}
          imagesCollection={imagesCollection}
          linksCollection={linksCollection}
          title={title}
          recipeTime={recipeTime}
          customClass={customClass}
          titleClass={titleClass}
          ingredientsCount={ingredientsCount}
        />
      );
    default:
      return (
        <CardOne
          description={description}
          imagesCollection={imagesCollection}
          linksCollection={linksCollection}
          title={title}
          iconClass={iconClass}
        />
      );
  }
};

export default Card;
