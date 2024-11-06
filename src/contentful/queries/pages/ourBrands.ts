import fetchGraphql from '@/contentful/client'
import { OurBrandsResponse } from '@/contentful/type'

export default async function OurBrandsQuery(locale: string): Promise<OurBrandsResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        ourBrandsCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
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
              }
            }
            brandPostsCollection(limit:10){
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
