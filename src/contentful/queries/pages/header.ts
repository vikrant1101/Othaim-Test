import fetchGraphql from '@/contentful/client';
import { HeaderResponse } from '@/contentful/type';

export default async function HeaderQuery(
  locale: string
): Promise<HeaderResponse> {
  const { data } = await fetchGraphql({
    query: `query{
      headerCollection(limit:1, locale:"${locale == 'ar' ? 'ar' : ''}"){
        items{
          title,
          languageCollection{
            items{
              ...on Select{
                title,
                value
              }
            }
          }
          storeLocater{
            ...link
          }
          logo{
            ...image
          }
          menuCollection{
            items{
              ...links
            }
          }
          actionCollection{
            items{
              ...links
            }
          }
          defaultStore
        }
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
    }
    
    fragment link on Links{
      title,
      url,
      iconClass,
      target
    }
    fragment links on Links{
      title,
      url,
      iconClass,
      variant,
      target,
      ariaLabel,
      isDropdown
      dropdownCollection(limit:10){
        items{
          ...link
        }
      }
    }`,
  });
  return data;
}
