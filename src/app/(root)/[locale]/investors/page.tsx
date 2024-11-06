import React from 'react';
import PageLayout from '@/components/internalLayout';
import Zpattern from '@/components/Zpattern';
import InvestorQuery from '@/contentful/queries/pages/investors';
import Tiles from './_component/tiles';
import ShareInformation from './_component/shareInformation';
import Styles from './index.module.scss';
import Button from '@/components/Button';
import News from './_component/news';
import AnnualReport from '../(Home)/annualReport';

type InvestorsProps = {
    params: { locale: string };
};
const Investors = async ({ params: { locale } }: InvestorsProps) => {
    const investorPagedata = await InvestorQuery(locale == 'ar' ? 'ar' : '');
    const investorData = investorPagedata?.investorsPageCollection?.items[0];
    const annualReports = investorData?.annualReports;
    const tilesData = investorData?.shareInformationCollection;
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/stockMarkets`
    );
    const { Values: stocksData } = await res.json();
    const requiredFields = [
        'date',
        'change',
        'prevClose',
        'open',
        'high',
        'low',
        'volume',
    ];
    const stockInfo = stocksData?.reduce(
        (acc: any, item: any) => {
            if (requiredFields.includes(item.name)) {
                acc[item.name] = item.Formats[0]?.value;
            }
            return acc;
        },
        {} as Record<string, any>
    );
    return (
        <>
            <PageLayout
                BreadcrumbData={investorData?.breadcrumb?.linksCollection?.items}
                bannerHeading={investorData?.innerBanner?.title}
            ></PageLayout>
            <Zpattern dataCollection={investorData?.intro} />
            <div className="containerXL">
                <div className="rowFlex rowGutters12">
                    <Tiles tilesData={tilesData?.items} />
                    {/* <ShareInformation stockInfo={stockInfo} /> */}
                </div>
            </div>

            <div className={Styles.announcemmentTop}>
                <div className="containerXL">
                    <div className="rowFlex">
                        <div className="columnMd12">
                            <div className={Styles.smallText}>
                                <p>Data delayed at least 15 minutes</p>
                            </div>
                        </div>
                        <div className="columnMd8">
                            <div className={Styles.Title}>
                                {investorData?.companyAnnouncements?.title && (
                                    <h2>{investorData?.companyAnnouncements?.title}</h2>
                                )}
                            </div>
                        </div>
                        <div className="columnMd4 contentRightMd">
                            {investorData?.companyAnnouncements?.linksCollection?.items?.map(
                                (item, itemKey) => (
                                    <Button
                                        key={itemKey}
                                        label={item?.title}
                                        varient={item?.variant || 'Primary'}
                                        className={`${Styles.btn} ${Styles.btnDesktop}`}
                                    />
                                )
                            )}
                        </div>
                        <div className="columnMd12 ">
                            <News
                                cardsCollection={
                                    investorData?.companyAnnouncements?.cardsCollection
                                }
                            />
                        </div>
                        <div className="columnMd12">
                            {investorData?.companyAnnouncements?.linksCollection?.items?.map(
                                (item, itemKey) => (
                                    <Button
                                        key={itemKey}
                                        label={item?.title}
                                        varient={item?.variant || 'Primary'}
                                        className={`${Styles.btn} ${Styles.btnMoblie}`}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <AnnualReport annualReports={annualReports} />
            </div>
        </>
    );
};

export default Investors;
