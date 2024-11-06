import fetchGraphql from '@/contentful/client'
import { RecipeArchiveResponse } from '@/contentful/type'

export default async function RecipeArchiveQuery(locale: string): Promise<RecipeArchiveResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        recipeArchiveCollection(limit:1, locale: "${locale == 'ar' ? 'ar' : ''}){
          items{
            innerBanner{
              ...on InnerBanner{
                title
              }
            }
            breadcrumb{
              ...on Breadcrumb{
                linksCollection(limit:10){
                  items{
                    ...on TextLink{
                      title,
                      url
                    }
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
