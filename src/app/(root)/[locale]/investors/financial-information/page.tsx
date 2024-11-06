import PageLayout from '@/components/internalLayout';
import PdfBlock from '@/components/pdfBlock';
import Tab from '@/components/Tab';
import React from 'react';
import Styles from './index.module.scss';
import FinancialInformationQuery from '@/contentful/queries/pages/financial-information';

type FinancialInformationProps = {
  params: { locale: string };
};

const FinancialInformation = async ({ params: { locale } }: FinancialInformationProps) => {
  const financialInformationData = await FinancialInformationQuery(locale);
  const financialInformationCollection = financialInformationData?.financialInformationPageCollection?.items[0];

  const tabs = financialInformationCollection?.tabsCollection?.items.map((item: any) => {
    const label = item?.title;

    return {
      label,
      content: (
        <div className={`${Styles.financialInfoSec}`}>
          <div className={Styles.mainInfoPanel}>
            {item.linksCollection?.items?.length > 0 ? (
              item.linksCollection.items.map((data: any) => (
                <div key={data.title} className={`${Styles.headingPanel}`}>
                   {data?.title ? <h2>{data.title}</h2> : null}
                </div>
              ))
            ) : (
              <p>No documents available in this tab.</p> // Message for empty tab
            )}
            {item.linksCollection?.items?.map((data: any) => (
              <div key={data.title} className={`${Styles.headingPanel}`}>
                {data.linksCollection && Array.isArray(data.linksCollection.items) && data.linksCollection.items.length > 0 ? (
                  <div className="rowFlex rowGutters12">
                    {data.linksCollection.items.map((itm: any) => (
                      <div key={itm.title} className="columnMd4">
                        <PdfBlock fileName={itm?.title || 'File Name'} fileUrl={itm?.pdf?.url || '#'} customClass={Styles.mb24} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No documents available in this section.</p> 
                )}
              </div>
            ))}
          </div>
        </div>
      ),
    };
  });

  return (
    <PageLayout BreadcrumbData={financialInformationCollection?.breadcrumb?.linksCollection?.items} bannerHeading={financialInformationCollection?.innerBanner?.title}>
      <Tab tabs={tabs} />
    </PageLayout>
  );
};

export default FinancialInformation;
