import React from 'react';
import Styles from './index.module.scss';
import Button from '@/components/Button';
import { Sliders } from '@/components/SlickSlider/sliders';
import Card from '@/components/cards';
import RecipeQuery from '@/contentful/queries/pages/recipe';
import Link from 'next/link';
const settings = {
  dots: false,
  speed: 500,
  infinite: false,
  slidesToShow: 4,
  // centerPadding: "10%",
  responsive: [
    {
      breakpoint: 1365,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: true,
        centerPadding: '27px',
        infinite: true,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};
const Recipes = async ({ locale, dailyRecipe }: any) => {
  const recipesData = await RecipeQuery(locale);
  const recipeDataCollection = recipesData?.recipePostsCollection?.items;
  const btnData = dailyRecipe?.linksCollection?.items[0]

  return (
    <div className={`containerXL recipesMain`}>
      <div className={Styles.recipesMain}>
        <div className={Styles.recipesCon}>
          <div className="rowFlex justifyContentBetween alignItemsCenter">
            <div className={`${Styles.contentCon} columnMd8`}>
              {dailyRecipe?.title && <h2>{dailyRecipe?.title}</h2>}
            </div>
            <div className={`${Styles.learnMoreCon} columnMd4`}>
              {btnData?.title &&
                <Button
                  varient={btnData?.variant}
                  label={btnData?.title}
                  link={btnData?.url}
                  target={btnData?.target}
                />
              }
            </div>
          </div>
        </div>
        <div>
          <Sliders {...settings}>
            {recipeDataCollection?.map(
              ({ title, excerpt, recipeTime, ingredientsCount, thumbnail, slug }: any, id: any) => (
                <div key={`lattestCollection-${id}`} className={`${Styles.cardContainer}`}>
                  <Link href={`/recipes/${slug}`} className={Styles.cardLinkBlock} />
                  <Card
                    variant="five"
                    description={excerpt}
                    imagesCollection={thumbnail}
                    recipeTime={recipeTime}
                    linksCollection={thumbnail}
                    ingredientsCount={ingredientsCount}
                    title={title}
                  />

                </div>
              )
            )}
          </Sliders>
        </div>
        <div className={`${Styles.learnMoreConMd} columnMd2`}>
          {btnData?.title &&
            <Button
              varient={btnData?.variant}
              label={btnData?.title}
              link={btnData?.url}
              target={btnData?.target}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Recipes;
