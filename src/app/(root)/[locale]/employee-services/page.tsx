import Card from '@/components/cards';
import TitleWithDesc from '@/components/headingWithDescription';
import PageLayout from '@/components/internalLayout';
import React from 'react';
import Styles from './index.module.scss';
import EmployeeServicesQuery from '@/contentful/queries/pages/employeeServices';
import { CARD } from '@/contentful/type/common';
type EmployeServicesProps = {
  params: { locale: string };
};
const EmployeServices = async ({
  params: { locale },
}: EmployeServicesProps) => {
  const employeeData = await EmployeeServicesQuery(locale);
  const employeeDataCollection =
    employeeData?.employeeServicesCollection?.items[0];
  return (
    <PageLayout
      BreadcrumbData={employeeDataCollection?.breadcrumb?.linksCollection?.items}
      bannerHeading={employeeDataCollection?.innerBanner?.title}
    >
      <div className="containerXL innerSpace">
        {employeeDataCollection?.intro ? (
          <TitleWithDesc
            title={employeeDataCollection?.intro?.title || ''}
            description={employeeDataCollection?.intro?.description}
          />
        ) : null}

        <div className={`rowFlex rowGutters12 ${Styles.mt48}`}>
          {employeeDataCollection?.cardsCollection?.items?.map(
            ({ description, title, backgroundImage, iconClass }: CARD) => (
              <div className={`${Styles.cardCon} columnMd6 columnXl4`}>
                <Card
                  description={description}
                  title={title}
                  iconClass={iconClass}
                  imagesCollection={backgroundImage}
                />
              </div>
            )
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default EmployeServices;
