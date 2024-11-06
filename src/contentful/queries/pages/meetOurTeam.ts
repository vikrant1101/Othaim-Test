import fetchGraphql from '@/contentful/client'
import { MeetTeamResponse } from '@/contentful/type'

export default async function MeetOurTeamQuery(locale: string): Promise<MeetTeamResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        meetOurTeamCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
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
            teamsCollection(limit:12){
              items{
                ...on TeamMember{
                  title
                  designation
                  thumbnail{
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
