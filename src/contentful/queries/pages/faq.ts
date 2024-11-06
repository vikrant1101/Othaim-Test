import fetchGraphql from '@/contentful/client'
import { FaqResponse } from '@/contentful/type'

export default async function FaqQuery(locale: string): Promise<FaqResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        faqPageCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
          items{
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
            innerBanner{
              ...on InnerBanner{
                title
              }
            }
            faqCollection(limit:20){
              items{
                ...on Accordion{
                  title,
                  content{
                    json
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
