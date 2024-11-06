import fetchGraphql from '@/contentful/client'
import { BusinessReportResponse } from '@/contentful/type'

export default async function BusinessReportQuery(locale: string): Promise<BusinessReportResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        businessReportCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
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
            fiscalYearsCollection(limit:5){
              items{
                ...on Card{
                  title
                  subTitle
                  cardsCollection(limit:10){
                    items{
                      ...on Card{
                        title
                        cardsCollection(limit:10){
                          items{
                            ...on Card{
                              title
      
                            }
                          }
                        }
                      }
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
