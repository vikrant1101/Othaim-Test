import fetchGraphql from '@/contentful/client'
import { FinancialInformationResponse } from '@/contentful/type'

export default async function FinancialInformationQuery(locale: string): Promise<FinancialInformationResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        financialInformationPageCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
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
            tabsCollection(limit:10){
              items{
                ...on Tabs{
                  title,
                  content{
                    json
                  }
                  linksCollection(limit:1){
                    items{
                      ...on Card{
                        title,
                        linksCollection(limit:30){
                          items{
                            ...on PdfMedia{
                              title,
                              iconClass,
                              pdf{
                                url
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
        }
      }`,
  });
  return data;
}
