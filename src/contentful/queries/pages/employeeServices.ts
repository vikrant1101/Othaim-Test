import fetchGraphql from '@/contentful/client'
import { EmployeeServicesResponse } from '@/contentful/type'

export default async function EmployeeServicesQuery(locale: string): Promise<EmployeeServicesResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        employeeServicesCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
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
            intro{
              ...on Card{
                title
                description{
                  json
                }
              }
            }
            cardsCollection(limit:10){
              items{
                ...on Card{
                  title
                  backgroundImage{
                    ...on Image{
                      alt
                      ariaLabel
                      image{
                        url
                        width
                        height
                      }
                    }
                  }
                  description{
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
