'use client';
import React from 'react';
import Styles from './index.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Sliders } from '@/components/SlickSlider/sliders';
import Card from '@/components/cards';

const settings = {
  dots: false,
  speed: 500,
  infinite: false,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1365,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 1300,
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
        slidesToShow: 2,
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
        centerMode: true,
        centerPadding: "28px",
        infinite: true,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};
const AnnualReport = ({ annualReports }: any) => {

  return (
    <div className="containerXL">
      <div className={`${Styles.annualReportMainCon} sectionSpace annualReportMainCon`}>
        {(annualReports?.title || annualReports?.description) &&
          <div className={`rowFlex`}>
            <div className="columnMd12">
              <div className={Styles.aboutCompanyCon}>
                {annualReports?.title ? <h2 className="h2">{annualReports?.title}</h2> : null}

                {annualReports?.description ? (
                  <div className={Styles.paraGraph}>
                    {documentToReactComponents(annualReports?.description?.json)}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        }
        {annualReports?.cardsCollection?.items?.length && (
          <div className={Styles.sliderWrapper}>
            <Sliders {...settings}>
              {annualReports?.cardsCollection?.items?.map(
                (
                  {
                    description,
                    imagesCollection,
                    linksCollection,
                    title,
                  }: any,
                  id: any
                ) => (
                  <div key={`cardsCollection-${id}`}>
                    <Card
                      description={description}
                      imagesCollection={imagesCollection}
                      linksCollection={linksCollection}
                      title={title}
                    />
                  </div>
                )
              )}
            </Sliders>
          </div>

        )}
      </div>
    </div>

  );
};

export default AnnualReport;
