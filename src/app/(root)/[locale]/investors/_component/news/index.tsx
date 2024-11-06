'use client'
import React from 'react'
import Styles from './index.module.scss';
import Divider from '@/components/Divider';
import { Sliders } from '@/components/SlickSlider/sliders';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import useEqualHeight from '@/util/hooks/useEqualHeight';
const News = ({ cardsCollection, className }: any) => {
    useEqualHeight(['equalHeading', 'equalContent']);
    const newsData = cardsCollection?.items
    const settings = {
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 3,
        // centerPadding: "10%",
        responsive: [
            {
                breakpoint: 1365,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
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
                    dots: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: true,
                    centerPadding: "28px",
                    infinite: true,
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <Sliders {...settings}>
            {newsData &&
                newsData?.map(
                    ({ title, description }: any, idx: number) => (
                        <div key={`cardsCollection-${idx}`}>
                            <div className={`${Styles.newsCard}`} key={idx}>
                                <div className={`dFlex ${Styles.newsCardTop}`}>
                                    <span className='icon-calendar-alt'></span>
                                    {title && <p>{title}</p>}
                                </div>
                                <Divider isHorizontal />
                                <div className={`${Styles.newsCardBottom} equalContent`}>
                                    {documentToReactComponents(description?.json)}
                                </div>

                            </div>
                        </div>

                    )
                )}
        </Sliders>

    )
}

export default News