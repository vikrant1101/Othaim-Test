import React from 'react';
import Styles from './index.module.scss';
import Card from '@/components/cards';
import Link from 'next/link';
const RecipePanel = ({ recipeData }: any) => {
  return (
    <div className="rowFlex">
      {recipeData?.map(
        (
          {
            title,
            excerpt,
            recipeTime,
            ingredientsCount,
            thumbnail,
            slug,
          }: any,
          id: any
        ) => (
          <div
            className="columnXl3 columnLg4 columnMd4 columnSmd12 columnSm6"
            key={`lattestCollection-${id}`}
          >
            <Link
              href={`/recipes/${slug}`}
              className={Styles.cardLinkBlock}
            ></Link>
            <Card
              variant="five"
              description={excerpt}
              imagesCollection={thumbnail}
              recipeTime={recipeTime}
              linksCollection={thumbnail}
              ingredientsCount={ingredientsCount}
              title={title}
              customClass={`${Styles.mb}`}
            />
          </div>
        )
      )}
    </div>
  );
};

export default RecipePanel;
