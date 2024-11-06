import fetchGraphql from '@/contentful/client'
import { AwarenessProgramResponse } from '@/contentful/type'

export default async function AwarenessProgramQuery(locale: string): Promise<AwarenessProgramResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        awarenessProgramCollection(limit:1, locale: "${locale == 'ar' ? 'ar' : ''}"){
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
            clientProtection{
              ...on Card{
                title
                description{
                  json
                }
                cardsCollection(limit:4){
                  items{
                    ...on Card{
                      title
                      backgroundImage{
                        ...image
                      }
                    }
                  }
                }
              }
            }
            respectPrivacy{
              ...on Card{
                title
                description{
                  json
                }
                backgroundImage{
                  ...image
                }
                cardsCollection(limit:1){
                  items{
                    ...on Card{
                      title
                      description{
                        json
                      }
                      cardsCollection(limit:4){
                        items{
                          ...on Card{
                            iconClass
                            title
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            respectOfCulturalFeatures{
              ...on Card{
                title
                description{
                  json
                }
                cardsCollection(limit:2){
                  items{
                    ...on Card{
                      title
                      iconClass
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
        alt
        ariaLabel
        image{
          url
          height
          width
        }
      }`,
  });
  return data;
}
