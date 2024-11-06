import Styles from './index.module.scss';
import PageLayout from '@/components/internalLayout';
import Divider from '@/components/Divider';
import RecipePanel from './_component/recipe/recipes';
import RecipeQuery from '@/contentful/queries/pages/recipe';
import { redirect } from 'next/navigation';
type RecipesProps = {
  params: { locale: string };
};
const Recipes = async ({ params: { locale } }: RecipesProps) => {
  const titleBanner = 'Recipes';
  let data = [
    { url: '/', title: 'home' },
    { url: '', title: 'Recipes' },
  ];

  redirect('/');

  const recipesData = await RecipeQuery(locale);
  const recipeDataCollection = recipesData?.recipePostsCollection?.items;
  return (
    <PageLayout BreadcrumbData={data} bannerHeading={titleBanner}>
      <div className={`containerXL recipesMain innerSpace`}>
        <div className={Styles.recipesMain}>
          <RecipePanel recipeData={recipeDataCollection} />
          <div className={Styles.mt}>
            <Divider isHorizontal />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Recipes;
