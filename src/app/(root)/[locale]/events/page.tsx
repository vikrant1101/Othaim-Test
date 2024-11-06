import PageLayout from '@/components/internalLayout';
import React from 'react';
import Styles from './index.module.scss';
import EventCard from '@/components/EventCard';
import DownloadPDFButton from '@/components/Download';
type EventsProps = {
  params: { locale: string };
};

const Events = async ({ params: { locale } }: EventsProps) => {
  const titleBanner = 'Events';
  let data = [
    { url: '/', title: 'Home' },
    { url: '', title: 'Events' },
  ];

  return (
    <PageLayout BreadcrumbData={data} bannerHeading={titleBanner}>
      <div className={`containerXL innerSpaceSm ${Styles.mainSharePanel}`}>
        <div className={Styles.innerSharePanel}>
          <h2>Upcoming Events</h2>
          <EventCard
          heading='Extraordinary General Assembly Meeting'
            date={'01/10/2024 at 19:00 (UTC+03:00)'}
            className='heightAuto'
          >
          </EventCard>
        </div>

        <div className={Styles.innerSharePanel}>
          <h2>Past Annual General Meeting</h2>
          <div className="rowGutters12 rowFlex">
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
            <EventCard
          heading='Distribution Date of Dividends'
            date={'11 Sep 2024'}
            badge='Dividends'
          >

          </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
            <EventCard
          heading='Q2 2024 Results'
            date={'11 Sep 2024'}
            badge='Financial Results'
          >
            <DownloadPDFButton fileName={''} fileUrl={''}></DownloadPDFButton>

          </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
            <EventCard
          heading='Distribution Date of Dividends'
            date={'12 Sep 2024'}
            badge='Dividends'
          >

          </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
            <EventCard
          heading='Ordinary General Assembly Meeting'
            date={'03 Sep 2024'}
            badge='Dividends'
          >

          </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
            <EventCard
          heading='Q1 2024 Results'
            date={'13 Sep 2024'}
            badge='Financial Results'
          >
            <DownloadPDFButton fileName={''} fileUrl={''}></DownloadPDFButton>

          </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
            <EventCard
          heading='2023 Annual Report'
            date={'31 Sep 2024'}
            badge='Financial Results'
          >
            <DownloadPDFButton fileName={''} fileUrl={''}></DownloadPDFButton>

          </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
           
          <EventCard
          heading='Distribution Date of Dividends'
            date={'07 Mar 2024'}
            badge='Dividends'
          >

          </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
            <EventCard
          heading='Q4 2023 Results'
            date={'07 Feb 2024'}
            badge='Financial Results'
          >

          </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
            <EventCard
          heading='Q3 2023 Results'
            date={'06 Sep 2023'}
            badge='Financial Results'
          >

          </EventCard>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Events;
