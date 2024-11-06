import React from 'react';
import PageLayout from '@/components/internalLayout';
import Image from 'next/image';
import HomeRecipeQuery from '@/contentful/queries/pages/recipeSingle';
import Styles from './index.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SocialShare from '../_component/recipeShare';
type SingleRecipesProps = {
  params: { locale: string; slug: string }; // Slug is now correctly defined in params
};
const SingleRecipe = async ({ params: { locale, slug } }: SingleRecipesProps) => {
  
  const recipeData = await HomeRecipeQuery(slug, locale);
  const pageData = recipeData?.recipePostsCollection?.items[0];
  let data = [
    { url: '/', title: 'home' },
    { url: '/recipes', title: 'Recipes' },
    { url: '', title: [pageData?.title] },
  ];
  return (
    <PageLayout BreadcrumbData={data}>
      <div className={`containerXL recipesMain innerSpace pt0`}>
        <div className={Styles.singleBannerImagePanel}>
          <Image
            src={pageData?.singleImage?.image?.url}
            alt={pageData?.singleImage?.alt}
            height={pageData?.singleImage?.image?.height}
            width={pageData?.singleImage?.image?.width}
          ></Image>
        </div>
        <div className={`${Styles.singleRecipeTitlePanel} dFlex gap30`}>
          <div className={`${Styles.leftTitlePanel} columnXl8 columnMd6 column12 `}>
            <div className={Styles.title}>
              <h1>{pageData?.title}</h1>
            </div>
            <div className="rowFlex">
              <div className="columnAuto gap5 dFlex">
                <Image
                  alt={'CHEF'}
                  src={'/img/chef.svg'}
                  height={15}
                  width={15}
                />
                <span>{pageData?.ingredientsCount}</span>
              </div>
              <div className="columnAuto gap5 dFlex">
                <Image
                  alt={'clock'}
                  src={'/img/clock.svg'}
                  height={15}
                  width={15}
                />
                <span>{pageData?.recipeTime}</span>
              </div>
            </div>
          </div>
          <div className={`${Styles.rightTitlePanel} columnXl4 columnMd6 column12`}><SocialShare></SocialShare></div>
        </div>
        <div className={`${Styles.singleRecipeDescriptionPanel} dFlex `}>
        <div className={`${Styles.leftTitlePanel} columnLg4 columnMd5 column12 `}>
          {documentToReactComponents(pageData?.ingredients?.json)}
        </div>
        <div className={`${Styles.rightTitlePanel} columnLg8 columnMd7 column12 `}>  {documentToReactComponents(pageData?.content?.json)}</div>
  
        </div>
      </div>
    </PageLayout>
  );
};

export default SingleRecipe;
