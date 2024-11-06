import fetchGraphql from '@/contentful/client'
import { RecipeSingleResponse } from '@/contentful/type'

export default async function HomeRecipeQuery(slug:string, locale: string): Promise<RecipeSingleResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        recipePostsCollection(where:{slug:"${slug}"}, limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
          items{
            ...on RecipePosts{
              title
              ingredientsCount
              recipeTime
              singleImage{
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
              ingredients{
                json
              }
              content{
                json
              }
            }
          }
        }
      }`,
  });
  return data;
}
