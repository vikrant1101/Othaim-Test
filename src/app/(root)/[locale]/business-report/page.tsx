import TitleWithDesc from '@/components/headingWithDescription';
import PageLayout from '@/components/internalLayout';
import React from 'react';
import BusinessReportQuery from '@/contentful/queries/pages/businessReport';
import Styles from './index.module.scss';
import PdfBlock from '@/components/pdfBlock';
import { CARD } from '@/contentful/type/common';

type BusinessReportProps = {
  params: { locale: string };
};

const BusinessReport = async ({ params: { locale } }: BusinessReportProps) => {
  const businessReportData = await BusinessReportQuery(locale);
  const businessReportCollection = businessReportData?.businessReportCollection?.items[0];
  return (
    <PageLayout BreadcrumbData={businessReportCollection?.breadcrumb?.linksCollection?.items} bannerHeading={businessReportCollection?.innerBanner?.title}>
      <div className="containerXL innerSpace">
        <TitleWithDesc
          title={businessReportCollection?.intro?.title}
          description={businessReportCollection?.intro?.description}
        />
        <div className="row">
          {businessReportCollection?.fiscalYearsCollection?.items?.length > 0 &&
            businessReportCollection?.fiscalYearsCollection?.items.map(
              (item: CARD, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <div className={`${Styles.mainFiscalRow}`}>
                      <div className={`${Styles.HeadingPanel}`}>
                        {item.title}
                      </div>
                      {item?.cardsCollection?.items?.map((subitem?: CARD) => (
                        <>
                          <div className={`${Styles.sunbHeadingPanel}`}>
                            {subitem?.title}
                          </div>
                          <div className="rowGutters12 rowFlex">
                            {subitem?.cardsCollection?.items?.map(
                              (subbitem: any, index: number) => (
                                <div className={`columnMd4 ${Styles.pdfBlock}`}>
                                  <PdfBlock
                                    fileName={subbitem.title}
                                    fileUrl={'#'}
                                    customClass={Styles.pdfPanel}
                                  ></PdfBlock>
                                </div>
                              )
                            )}
                          </div>
                        </>
                      ))}
                    </div>
                  </React.Fragment>
                );
              }
            )}
        </div>
      </div>
    </PageLayout>
  );
};

export default BusinessReport;
