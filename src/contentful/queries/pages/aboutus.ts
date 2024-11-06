import fetchGraphql from '@/contentful/client'
import { AboutResponse } from '@/contentful/type'

export default async function AboutusQuery(locale: string): Promise<AboutResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        aboutUsCollection(limit:1, locale: "${locale == 'ar' ? 'ar' : ''}"){
          items{
            title,
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
            aboutCompany{
              ...on Card{
                title,
                description{
                  json
                }
                backgroundImage{
                  ...image
                }
              }
            }
            messagesCollection(limit:2){
            items{
              ...on Message{
                title,
                description{
                  json
                }
                authorTitle,
                authorDesignation,
                authorImage{
                  url,
                  height,
                  width,
                  title
                }
              }
            }
          } 
            ourMission{
              ...on Card{
                title,
                description{
                  json
                }
                imagesCollection(limit:1){
                  items{
                    ...image
                  }
                }
              }
            }
            aboveFooter{
              ...on Card{
                title,
                cardsCollection(limit:2){
                  items{
                    ...on Card{
                      title,
                      iconClass,
                      subTitle,
                      backgroundImage{
                        ...image
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      fragment image on Image{
      alt,
      ariaLabel,
        image{
          url,
          height,
          width
        }
      } `,
  });
  return data;
}
