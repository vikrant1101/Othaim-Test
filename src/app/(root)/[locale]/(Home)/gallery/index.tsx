'use client';
import React, { useRef } from 'react';
import Styles from './index.module.scss';
import Card from '@/components/cards/card4';
import Link from 'next/link';
import Slider from 'react-slick';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { UseMediaQuery } from '@/util/hooks/useMediaQuery';

const Gallery = ({ locale, gallery }: any) => {
  const matchMedia = UseMediaQuery('766.99');
  const matches = !!matchMedia;

  const settings = {
    dots: true,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          infinite: true,
          slidesToShow: 1.1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const sliderRef = useRef<Slider | null>(null);

  const handlePrevArrowClick = (event: any) => {
    event.preventDefault();
    sliderRef.current?.slickPrev();
  };
  const handleNextArrowClick = (event: any) => {
    event.preventDefault();

    sliderRef.current?.slickNext();
  };
  return (
    <div className="readLatestMain">
      <div className={Styles.galleryMain}>
        <div className="containerXL">
          <div className={Styles.readLatestCon}>
            <div className="rowFlex alignItemsEnd">
              <div className="columnMd10">
                <div className={`${Styles.contentCon}`}>
                  {gallery?.title && <h2>{gallery?.title}</h2>}
                  {documentToReactComponents(gallery?.description?.json)}
                </div>
              </div>

              <div className="columnMd2">
                <div
                  className={`slider-wrapper-arrow  ${locale == 'ar' ? 'slider-wrapper-arhistory' : ''
                    }`}
                >
                  <Link
                    href="#"
                    className="slider-arrow previous"
                    onClick={handlePrevArrowClick}
                  >
                    <span className="icon-left-arrow"></span>
                    <span className={`sr-only`}> Previous </span>
                  </Link>
                  <Link
                    href="#"
                    className="slider-arrow next"
                    onClick={handleNextArrowClick}
                  >
                    <span className="icon-right-arrow"></span>
                    <span className={`sr-only`}> Next </span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="rowFlex alignItemsEnd">
          <div className="columnMd12">
            <div className={`slider-wrapper ${Styles.gallerySlider}`}>
              <Slider ref={sliderRef} {...settings}>
                {gallery?.imagesCollection?.items?.map((itm: any, id: any) => (
                  <div
                    key={`lattestCollection-${id}`}
                    className={`${Styles.cardContainer}`}
                  >
                    <Card items={itm} />
                  </div>
                ))}
              </Slider>

            </div>
          </div>
          {matches ?
            <div className="columnMd12">
              <div
                className={`slider-wrapper-arrow justifyContentCenter ${Styles.mobArrow}  ${locale == 'ar' ? 'slider-wrapper-arhistory' : ''
                  }`}
                style={{ gap: `${gallery?.imagesCollection?.items.length * 29}px` }}
              >
                <Link
                  href="#"
                  className="slider-arrow previous"
                  onClick={handlePrevArrowClick}
                >
                  <span className="icon-left-arrow"></span>
                  <span className={`sr-only`}> Previous </span>
                </Link>
                <Link
                  href="#"
                  className="slider-arrow next"
                  onClick={handleNextArrowClick}
                >
                  <span className="icon-right-arrow"></span>
                  <span className={`sr-only`}> Next </span>
                </Link>
              </div>
            </div>
            : null}
        </div>


        {/* <div className={`${Styles.learnMoreConMd} columnMd2`}>
          <Button varient="Outline" label="Learn More" />
        </div> */}
      </div>
    </div>
  );
};

export default Gallery;
