import fetchGraphql from '@/contentful/client'
import { RecipeResponse } from '@/contentful/type'

export default async function RecipeQuery(locale: string): Promise<RecipeResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        recipePostsCollection(order:sys_firstPublishedAt_DESC, limit:8,locale:"${locale == 'ar' ? 'ar' : ''}"){
          items{
            ...on RecipePosts{
              title
              excerpt
              slug
              ingredientsCount
              recipeTime
              thumbnail{
                ...on Image{
                  ariaLabel
                  alt
                  image{
                    url
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }`,
  });
  return data;
}
