import PageLayout from '@/components/internalLayout';
import React from 'react';
import Image from 'next/image';
import Styles from './index.module.scss';
import OurBrandsQuery from '@/contentful/queries/pages/ourBrands';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import TitleWithDesc from '@/components/headingWithDescription';
type OurBrandsProps = {
  params: { locale: string };
};
const OurBrands = async ({ params: { locale } }: OurBrandsProps) => {
  const ourBrandsData = await OurBrandsQuery(locale);
  const ourBrandsCollection = ourBrandsData?.ourBrandsCollection?.items[0];
  return (
    <PageLayout
      BreadcrumbData={ourBrandsCollection?.breadcrumb?.linksCollection?.items}
      bannerHeading={ourBrandsCollection?.innerBanner?.title}
    >
      <div className="containerXL innerSpace">
        {ourBrandsCollection?.intro?.title ||
        ourBrandsCollection?.intro?.description ? (
          <TitleWithDesc
            title={ourBrandsCollection?.intro?.title || ''}
            description={ourBrandsCollection?.intro?.description}
            className={Styles.descriptionPanel}
          />
        ) : (
          ''
        )}
       
        {ourBrandsCollection?.brandPostsCollection?.items?.map(
          ({ description, title, backgroundImage }: any) => (
            <div className={Styles.brandPanel}>
              <div className={Styles.brandLeftPanel}>
                <Image
                  src={backgroundImage?.image?.url}
                  height={300}
                  width={384}
                  alt={backgroundImage?.alt}
                />
              </div>
              <div className={Styles.brandRightPanel}>
                <h3>{title}</h3>
                {description?.json &&
                  documentToReactComponents(description?.json)}
              </div>
            </div>
          )
        )}
      </div>
    </PageLayout>
  );
};
export default OurBrands;
