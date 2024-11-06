import fetchGraphql from '@/contentful/client'
import { CareersResponse } from '@/contentful/type'

export default async function CareersQuery(locale: string): Promise<CareersResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        careersCollection(limit:1,locale:"${locale == 'ar' ? 'ar' : ''}"){
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
            advantage{
              ...on Card{
                title
                description{
                  json
                }
                linksCollection(limit:1){
                  items{
                    ...link
                  }
                }
              }
            }
            employment{
              ...on Card{
                title
                description{
                  json
                }
              }
            }
            remoteWorkProgram{
              ...on Card{
                title
                description{
                  json
                }
                cardsCollection(limit:4){
                  items{
                    ...on Card{
                      title
                      subTitle
                      iconClass
                      description{
                        json
                      }
                      backgroundImage{
                        ...image
                      }
                    }
                  }
                }
              }
            }
            programsOfCooperative{
              ...on Card{
                title
                description{
                  json
                }
                backgroundImage{
                  ...on Image{
                    alt
                  }
                }
              }
            }
            programsOfCooperativeTraining{
              ...on Card{
                title
                description{
                  json
                }
                backgroundImage{
                  ...image
                }
              }
            }
            programsOfCooperative{
              ...on Card{
                title
                description{
                  json
                }
                cardsCollection(limit:4){
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
            growYourCareerFaster{
              ...on Card{
                title
                description{
                  json
                }
                linksCollection(limit:1){
                  items{
                    ...link
                  }
                }
              }
            }
          }
        }
      }
      fragment link on Links{
        title
        url
        ariaLabel
        variant
        target
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
