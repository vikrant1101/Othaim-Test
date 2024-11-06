import fetchGraphql from '@/contentful/client'
import { HistoryResponse } from '@/contentful/type'

export default async function HistoryQuery(locale: string): Promise<HistoryResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        historyPageCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
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
                title,
                description{
                  json
                }
                imagesCollection(limit:1){
                  items{
                    ...on Image{
                      alt
                      ariaLabel
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
            historyCardCollection(limit:20){
              items{
                ...on Card{
                  title
                  description{
                    json
                  }
                  backgroundImage{
                    ...on Image{
                      alt
                      ariaLabel
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
          }
        }
      }`,
  });
  return data;
}
