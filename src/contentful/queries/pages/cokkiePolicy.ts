import fetchGraphql from '@/contentful/client'
import { CokkiePolicyResponse } from '@/contentful/type'

export default async function CokkiePopupQuery(locale: string): Promise<CokkiePolicyResponse> {
  const { data } = await fetchGraphql({
      query: `query{
        cokkiePolicyPopupCollection(limit: 1, locale:"${locale == 'ar' ? 'ar' : ''}"){
          items{
            title,
            description{
              json
            }
            button{
              ...on Links{
                title,
                url,
                variant,
                target
              }
            }
            checkboxText
          }
        }
      }`,
  });
  return data;
}
