import React from 'react';
import Breadcrumb from '../Breadcrumb';
import InnerBanner from '../InnerBanner';
interface BreadCr {
  BreadcrumbData: any;
  children?: React.ReactNode;
  bannerHeading?: string;
}
const PageLayout = ({ BreadcrumbData, children, bannerHeading }: BreadCr) => {
  return (
    <div className="pageLayout container_outter">
      <Breadcrumb data={BreadcrumbData} />
      {bannerHeading && <InnerBanner title={bannerHeading} />}
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
