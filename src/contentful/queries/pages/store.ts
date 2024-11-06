import fetchGraphql from '@/contentful/client';
import { StoreResponse } from '@/contentful/type';

export default async function StoreQuery(
  locale: string
): Promise<StoreResponse> {
  const { data } = await fetchGraphql({
    query: `query{
      storeCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
        items{
          title
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
          intro{
            ...on Card{
              title,
              description{
                json
              }
            }
          }
          selectCityText
          selectRegionText
          selectStoreTypeText
          button{
            ...on Links{
              title
              url
              variant
              target
            }
          }
        }
      }
    }`,
  });
  return data;
}
