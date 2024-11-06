import fetchGraphql from '@/contentful/client'
import { ContactResponse } from '@/contentful/type'

export default async function ContactUsQuery(locale: string): Promise<ContactResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        contactPageCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
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
            contactLeftBarCollection(limit:2){
              items{
                ...on Card{
                  title,
                  subTitle,
                  linksCollection(limit:10){
                    items{
                      ...on TextLink{
                        title,
                        content
                        url
                      }
                    }
                  }
                }
              }
            }
            contactFormField
          }
        }
      }`,
  });
  return data;
}
