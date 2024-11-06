import fetchGraphql from '@/contentful/client';
import { FooterResponse } from '@/contentful/type';

export default async function FooterQuery(
  locale: string
): Promise<FooterResponse> {
  const { data } = await fetchGraphql({
    query: `query{
      footerCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
        items{
           logo{
              ...image
            }
           stayCard{
            ...card
          }
          socialLinksCollection(limit:10){
            items{
              ...links
            }
          }
          footerMenuCollection(limit:4){
            items{
              ...on Links{
                title
                isDropdown
                dropdownCollection(limit:10){
                  items{
                    ...links
                  }
                }
              }
            }
          }
          actions{
            ...on Links{
              title
              isDropdown
              dropdownCollection(limit:2){
                items{
                  ...on Links{
                    title,
                    backgroundImage{
                      ...image
                    }
                    url
                  }
                }
              }
            }
          }
          copyright
        }
      }
    }
     fragment links on Links{
      title,
      url,
      iconClass,
      variant,
      target,
      ariaLabel,
      isDropdown
    }
    fragment card on Card{
      title,
      description{
        json
      }
    }
    fragment image on Image{
    image{
      url,
      height,
      width
    }
    alt,
    ariaLabel,
    role
    }`,
  });
  return data;
}
