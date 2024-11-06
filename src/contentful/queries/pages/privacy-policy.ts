import fetchGraphql from '@/contentful/client'
import { PrivacyPolicyResponse } from '@/contentful/type'

export default async function PrivacyPolicyQuery(locale: string): Promise<PrivacyPolicyResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        privacyPolicyPageCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
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
            title,
            content{
              json
            }
          }
        }
      }`,
  });
  return data;
}
