import TitleWithDesc from '@/components/headingWithDescription';
import PageLayout from '@/components/internalLayout';
import { Sliders } from '@/components/SlickSlider/sliders';
import HistoryQuery from '@/contentful/queries/pages/history';
import React from 'react';
import Styles from './index.module.scss';
import HistoryCard from './_component/card';
import Divider from '@/components/Divider';
import { NextArrow, PrevArrow } from '@/components/SlickSlider/sliderArrow';

type HistoryProps = {
  params: { locale: string };
};
const History = async ({ params: { locale } }: HistoryProps) => {
  const historyData = await HistoryQuery(locale == 'ar' ? 'ar' : '');
  const historyDataCollection = historyData?.historyPageCollection.items[0];
  console.log("historyDataCollection", historyDataCollection);
  let data = [
    { url: '/', title: 'home' },
    { url: '/about-us', title: 'About Us' },
    { url: '', title: 'History' },
  ];
  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <PageLayout
      BreadcrumbData={data}
      bannerHeading={historyDataCollection?.innerBanner?.title}
    >
      <div className={`containerXL innerSpace ${Styles.sliderPadding}`}>
        <TitleWithDesc
          title={historyDataCollection?.intro?.title || ''}
          description={historyDataCollection?.intro?.description}
        />
        <div className={Styles.divider}>
          <Divider isHorizontal />
        </div>

        <div
          className="slider-wrapper historyPageBanner"
          style={{ margin: '0 -24px' }}
        >
          <Sliders {...settings} className={Styles.historySlider}>
            {historyDataCollection?.historyCardCollection?.items?.map(
              ({
                title,
                backgroundImage,
                description,
                linksCollection,
              }: any) => (
                <div
                  className={Styles.cardConMain}
                  key={`historycard${linksCollection?.items[0]?.url}`}
                >
                  <HistoryCard
                    title={title}
                    variant="five"
                    description={description}
                    imagesCollection={backgroundImage}
                  />
                </div>
              )
            )}
          </Sliders>
        </div>
      </div>
    </PageLayout>
  );
};

export default History;
