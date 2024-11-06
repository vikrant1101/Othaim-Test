import fetchGraphql from '@/contentful/client'
import { HomeRecipeResponse } from '@/contentful/type'

export default async function HomeRecipeQuery(locale: string): Promise<HomeRecipeResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        recipePostsCollection(order:sys_firstPublishedAt_DESC, limit:4,locale:"${locale == 'ar' ? 'ar' : ''}"){
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
