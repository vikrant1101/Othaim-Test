'use client'
import React, { useRef } from 'react'
import style from './index.module.scss';
import Slider from 'react-slick';
import Link from 'next/link';


const Social = ({ socialData, locale, socialTitle }: any) => {

    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 4,
        arrow: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1365,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    infinite: true,
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
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
        <div className={style.socialMain}>
            <div className='containerXL'>
                <div className={style.socialMainRight}>
                    <div className='rowFlex alignItemsCenter'>
                        <div className='columnMd10'>
                            <div className={style.sociaText}>
                                {socialTitle && <h2>{socialTitle}</h2>}
                            </div>
                        </div>
                        <div className="columnMd2">
                            <div
                                className={`slider-wrapper-arrow  ${locale == 'ar' ? 'slider-wrapper-arsocial' : ''
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
                    <div className={`slider-wrapper social-wrapper ${style.socialWrapperSlider}`}>
                        <Slider ref={sliderRef} {...settings}>
                            {socialData?.map((item: any, itemKey: any) => (
                                <div key={`social-${itemKey}`} className={`${style.socialCardMain}`}>
                                    <div className={`${style.socialCard}`}>
                                        {item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM' ? (
                                            <Link href={item?.permalink} target='_blank'>
                                                <img src={item?.media_url} height={384} width={384} alt={item.caption} />
                                            </Link>
                                        ) : item.media_type === 'VIDEO' ? (
                                            <video controls className="instagram-video">
                                                <source src={item.media_url} type="video/mp4" />
                                            </video>
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social