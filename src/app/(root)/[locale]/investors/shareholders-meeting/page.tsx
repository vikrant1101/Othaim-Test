import PageLayout from '@/components/internalLayout';
import React from 'react';
import Styles from './index.module.scss';
import EventCard from '@/components/EventCard';
import DownloadPDFButton from '@/components/Download';
type ShareholderProps = {
  params: { locale: string };
};

const Shareholder = async ({ params: { locale } }: ShareholderProps) => {
  const titleBanner = 'Shareholder’s Meeting';
  let data = [
    { url: '/', title: 'Home' },
    { url: '/investors', title: 'Investors' },
    { url: '', title: 'Shareholder’s Meeting' },
  ];

  return (
    <PageLayout BreadcrumbData={data} bannerHeading={titleBanner}>
      <div className={`containerXL innerSpaceSm ${Styles.mainSharePanel}`}>
        <div className={Styles.innerSharePanel}>
          <h2>Upcoming Annual General Meeting</h2>
          <EventCard
            date={'01/10/2024 at 19:00 (UTC+03:00)'}
            headingClassName="borderBottom pb24"
          >
            <DownloadPDFButton fileName={''} fileUrl={''}></DownloadPDFButton>
          </EventCard>
        </div>

        <div className={Styles.innerSharePanel}>
          <h2>Past Annual General Meeting</h2>
          <div className="rowGutters12 rowFlex">
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
              <EventCard
                heading={'2024 Annual General Meeting of Shareholders'}
                headingClassName="borderBottom pb24"
              >
                <DownloadPDFButton
                  fileName={''}
                  fileUrl={''}
                ></DownloadPDFButton>
              </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
              <EventCard
                heading={'2023 Annual General Meeting of Shareholders'}
                headingClassName="borderBottom pb24"
              >
                <DownloadPDFButton
                  fileName={''}
                  fileUrl={''}
                ></DownloadPDFButton>
              </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
              <EventCard
                heading={'2022 Annual General Meeting of Shareholders'}
                headingClassName="borderBottom pb24"
              >
                <DownloadPDFButton
                  fileName={''}
                  fileUrl={''}
                ></DownloadPDFButton>
              </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
              <EventCard
                heading={'2021 Annual General Meeting of Shareholders'}
                headingClassName="borderBottom pb24"
              >
                <DownloadPDFButton
                  fileName={''}
                  fileUrl={''}
                ></DownloadPDFButton>
              </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
              <EventCard
                heading={'2020 Annual General Meeting of Shareholders'}
                headingClassName="borderBottom pb24"
              >
                <DownloadPDFButton
                  fileName={''}
                  fileUrl={''}
                ></DownloadPDFButton>
              </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
              <EventCard
                heading={'2019 Annual General Meeting of Shareholders'}
                headingClassName="borderBottom pb24"
              >
                <DownloadPDFButton
                  fileName={''}
                  fileUrl={''}
                ></DownloadPDFButton>
              </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
              <EventCard
                heading={'2018 Annual General Meeting of Shareholders'}
                headingClassName="borderBottom pb24"
              >
                <DownloadPDFButton
                  fileName={''}
                  fileUrl={''}
                ></DownloadPDFButton>
              </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
              <EventCard
                heading={'2017 Annual General Meeting of Shareholders'}
                headingClassName="borderBottom pb24"
              >
                <DownloadPDFButton
                  fileName={''}
                  fileUrl={''}
                ></DownloadPDFButton>
              </EventCard>
            </div>
            <div className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
              <EventCard
                heading={'2016 Annual General Meeting of Shareholders'}
                headingClassName="borderBottom pb24"
              >
                <DownloadPDFButton
                  fileName={''}
                  fileUrl={''}
                ></DownloadPDFButton>
              </EventCard>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Shareholder;
