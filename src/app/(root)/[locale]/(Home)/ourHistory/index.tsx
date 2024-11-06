'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Styles from './index.module.scss';
import Slider from 'react-slick';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Card from '@/components/cards/card3';

const OurHistory = ({ ourHistory, locale }: any) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '11%',
    infinite: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          centerMode: true,
          centerPadding: '5px',
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: true,
          centerPadding: '11%',
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '28px',
          slidesToShow: 1.1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };


  const settingsDots = {
    dots: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '11%',
    infinite: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          centerMode: true,
          centerPadding: '5px',
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: true,
          centerPadding: '3%',
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '28px',
          slidesToShow: 1.1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };


  const handlePrevArrowClick = (event: React.MouseEvent) => {
    event.preventDefault();
    nav1?.slickPrev();
  };

  const handleNextArrowClick = (event: React.MouseEvent) => {
    event.preventDefault();
    nav1?.slickNext();
  };

  return (
    <div className={`${Styles.ourHistoryMainCon} sectionSpace ourHistoryMainCon`}>
      <div className="containerXL">
        <div className={`rowFlex ${Styles.gap24}`}>
          <div className="columnLg3">
            <div className={Styles.sliderButtonCon}>
              <div>
                {ourHistory?.title && <h2>{ourHistory?.title}</h2>}
                <div>{documentToReactComponents(ourHistory?.description?.json)}</div>
              </div>
              <div className={`slider-wrapper-arrow ${locale === 'ar' ? 'slider-wrapper-arhistory' : ''}`}>
                <Link href="#" className="slider-arrow previous" onClick={handlePrevArrowClick}>
                  <span className="icon-left-arrow"></span>
                  <span className="sr-only"> Previous </span>
                </Link>
                <Link href="#" className="slider-arrow next" onClick={handleNextArrowClick}>
                  <span className="icon-right-arrow"></span>
                  <span className="sr-only"> Next </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="columnLg9">
            <div className={`sliderHistory ${locale === 'ar' ? Styles.styleAr : Styles.styleEn}`} dir={locale !== 'ar' ? 'ltr' : 'rtl'}>
              <Slider asNavFor={nav2 as Slider | undefined} ref={setNav1} {...settings}>
                {ourHistory?.cardsCollection?.items?.map(
                  ({ title, imagesCollection, description, linksCollection, statsYear }: any) => (
                    <div className={Styles.cardConMain} key={`historycard${linksCollection?.items[0]?.url}`}>
                      <Card
                        locale={locale}
                        title={title}
                        imagesCollection={imagesCollection}
                        description={description}
                        linksCollection={linksCollection}
                      />
                      <div className={`${Styles.ellipseCon}`}>
                        <div>{statsYear && <p>{statsYear}</p>}</div>
                        <div className={`${Styles.ellipsImageCon} dFlex justifyContentCenterMd`}>

                        </div>
                      </div>
                    </div>
                  )
                )}
              </Slider>
              <div className={`${Styles.loadingbar} sliderHistoryDots`}>
                <Slider
                  asNavFor={nav1 as Slider | undefined}
                  ref={setNav2}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  {...settingsDots}

                >
                  {ourHistory?.cardsCollection?.items?.map(({ statsYear }: any, index: number) => (
                    <div className={Styles.loadingWidth}>
                      <div className={Styles.statsYear}>{statsYear && <p>{statsYear}</p>}</div>
                      <div className={Styles.loadingbarbulletMain}>

                        <div className={Styles.loadingbarbullet} key={`loadingBullet${index}`}></div>
                      </div>
                    </div>


                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
