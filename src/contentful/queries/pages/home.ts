import fetchGraphql from '@/contentful/client';
import { HomeResponse } from '@/contentful/type';

export default async function HomeQuery(locale: string): Promise<HomeResponse> {
  const { data } = await fetchGraphql({
        query: `query{
          homePageCollection(limit: 1, locale: "${locale == 'ar' ? 'ar' : ''}"){
            items{
              title,
              slider{
                ...on Card{
                  title,
                  cardsCollection(limit: 10){
                    items{
                      ...on Card{
                        iconClass,
                        badgeTitle,
                        title,
                        linksCollection(limit: 5){
                          items{
                            ...link
                          }
                        }
                        backgroundImage{
                          ...image
                        }
                        mobileBackground{
                          ...image
                        }
                      }
                    }
                  }
                }
              }
              belowBannerTiles{
                ...on Tiles{
                  title,
                  tile1{
                    ...on Card{
                      title,
                      linksCollection(limit:1){
                        items{
                            ...link
                        }
                      }
                    backgroundImage{
                      ...image
                    }
                      mobileBackground{
                        ...image
                      }
                    }
                  }
                  tile2{
                    ...on Card{
                      title,
                      linksCollection(limit:1){
                        items{
                            ...link
                        }
                      }
                    backgroundImage{
                      ...image
                    }
                      mobileBackground{
                        ...image
                      }
                    }
                  }
                  tile3{
                    ...on Card{
                      title,
                      subTitle,
                      description{
                        json
                      }
                      linksCollection(limit:1){
                        items{
                            ...link
                        }
                      }
                    backgroundImage{
                      ...image
                    }
                      mobileBackground{
                        ...image
                      }
                    }
                  }
                  tile4{
                    ...on Card{
                      title,
                      subTitle,
                      description{
                        json
                      }
                      linksCollection(limit:1){
                        items{
                            ...link
                        }
                      }
                    backgroundImage{
                      ...image
                    }
                      mobileBackground{
                        ...image
                      }
                    }
                  }
                }
              }
              dailyRecipe{
                ...on Card{
                  title,
                  linksCollection(limit:1){
                    items{
                      ...link
                    }
                  }
                }
              }
              social{
                ...on Card{
                  title
                }
              }
              introduction{
                  ...on Card{
                    badgeTitle,
                    title,
                    subTitle,
                    shareTitle,
                    sharePriceText,
                    shrePriceChangeText
                    linksCollection(limit: 1){
                      items{
                        ...link
                      }
                    }
                    description{
                      json
                    },
                    imagesCollection(limit: 1){
                      items{
                        ...image
                      }
                    }
                    mobileBackground{
                      ...image
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
                          imagesCollection(limit:1){
                            items{
                              ...image
                            }
                          }
                          title,
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
              ourMission{
                  ...on Card{
                    badgeTitle,
                    title,
                    description{
                      json
                    }
                    linksCollection(limit: 1){
                      items{
                        ...link
                      }
                    }
                    backgroundImage{
                      ...image
                    }
                    mobileBackground{
                      ...image
                    }
                  }
                }
              ourHistory{
                  ...on Card{
                    title,
                    description{
                      json
                    }
                    cardsCollection(limit:10){
                      items{
                        ...on Card{
                          title,
                          statsYear,
                          imagesCollection(limit: 1){
                            items{
                              ...image
                            }
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
              careers{
                  ...on Card{
                      badgeTitle,
                      subTitle,
                      title,
                      description{
                        json
                      }
                      linksCollection(limit: 1){
                        items{
                          ...link
                        }
                      }
                      imagesCollection(limit:1){
                      items{
                        ...image
                      }
                    }
                    }
                }
              gallery{
                ...on Card{
                  title,
                  description{
                    json
                  }
                  imagesCollection(limit:20){
                    items{
                      ...image
                    }
                  }
                }
              }
            }
          }
        }
        fragment link on Links{
          title,
          url,
          variant,
          ariaLabel,
          target
        }
        fragment image on Image{
          alt,
          ariaLabel,
          image{
            url,
            height,
            width
          }
        } `,
  });
  return data;
}
