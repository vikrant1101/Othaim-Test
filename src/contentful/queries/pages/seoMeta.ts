import fetchGraphql from '@/contentful/client';
import { SeoMetaResponse } from '@/contentful/type'

export default async function SeoMetaData(slug:string): Promise<SeoMetaResponse> {
  const { data } = await fetchGraphql({
    query: `query{
      seoMetaCollection(where:{slug:"${slug}"} limit: 1){
        items{
          metaTitle,
          metaDescription,
          canonical,
          ogTitle,
          ogDescription,
          ogImage{
            ...on Image{
              alt
              ariaLabel
              image{
                url
                width
                height
              }
            }
          }
        }
      }
    }`,
  });
  return data;
}
