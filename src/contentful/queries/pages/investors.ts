import fetchGraphql from '@/contentful/client'
import { InvestorResponse } from '@/contentful/type'

export default async function InvestorQuery(locale: string): Promise<InvestorResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        investorsPageCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
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
                backgroundImage{
                  ...image
                }
              }
            }
            shareInformationCollection(limit:4){
              items{
                ...on ShareInfoCard{
                  title,
                  content
                }
              }
            }
            companyAnnouncements{
              ...on Card{
                title
                cardsCollection(limit:4){
                  items{
                    ...on Card{
                      title
                      description{
                        json
                      }
                    }
                  }
                }
                linksCollection(limit:1){
                  items{
                    ...on Links{
                      title
                      variant
                      iconClass
                      target
                      ariaLabel
                    }
                  }
                }
              }
            }
            annualReports{
              ...on Card{
                title,
                description{
                  json
                }
                cardsCollection(limit:4){
                  items{
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
                      backgroundImage{
                        ...image
                      }
                      linksCollection(limit:1){
                        items{
                          ...on Links{
                            title
                            url
                            variant
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
