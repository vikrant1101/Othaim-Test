import fetchGraphql from '@/contentful/client'
import { NewsResponse } from '@/contentful/type'

export default async function NewsQuery(locale: string): Promise<NewsResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        newsCollection(limit:1, locale: "${locale == 'ar' ? 'ar' : ''}"){
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
