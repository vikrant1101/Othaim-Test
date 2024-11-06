'use client';
import style from './index.module.scss';
import Button from '@/components/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '@/components/SlickSlider/sliderArrow';
import { Sliders } from '@/components/SlickSlider/sliders';
import { UseMediaQuery } from '@/util/hooks/useMediaQuery';

const HomeBanner = ({ slider, locale }: any) => {
  const matchMedia = UseMediaQuery('766.99');
  const matches = !!matchMedia;
  const bannerData = slider?.cardsCollection?.items || [];
  const isSingleSlide = bannerData.length === 1;

  const settings = {
    dots: false,
    infinite: !isSingleSlide,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  return (
    <div className={`slider-wrapper homePageBanner  ${style.bannerMain}`}>
      <Sliders {...settings}>
        {bannerData?.map((item: any, itemKey: any) => (
          <div key={itemKey} dir={locale == 'ar' ? 'rtl' : 'ltr'}>
            <div
              className={style.bannerImg}
              style={{
                backgroundImage: `url(${matches ? item?.mobileBackground?.image?.url : item?.backgroundImage?.image?.url})`,
              }}
            >
              <div className="containerXL ">
                <div className="rowFlex">
                  <div className="column12 columnMd6 columnLg7 columnXl6">
                    <div className={style.bannerContentMain}>
                      {item?.badgeTitle && (
                        <div className={`${style.bannerText} h6`}>
                          {item?.badgeTitle}
                        </div>
                      )}
                      {item?.title && <h1 className="h2">{item?.title}</h1>}
                      {item?.linksCollection?.items?.length > 0 && (
                        <div className="dFlex gap16">
                          {item?.linksCollection?.items?.map(
                            (innerItem: any, idx: number) =>
                              innerItem.title && (
                                <Button
                                  key={`linksCollection-${idx}`}
                                  varient="Secondary"
                                  label={innerItem.title}
                                  className={style.bannerBtn}
                                />
                              )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Sliders>
    </div>
  );
};

export default HomeBanner;
