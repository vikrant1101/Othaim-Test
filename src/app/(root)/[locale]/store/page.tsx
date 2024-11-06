import React from 'react';
import Styles from './index.module.scss';
import SearchForm from './_component/formFields';
import PageLayout from '@/components/internalLayout';
import StoreQuery from '@/contentful/queries/pages/store';
import TitleWithDesc from '@/components/headingWithDescription';

type StoreProps = {
  params: { locale: string };
};

const Store = async ({ params: { locale } }: StoreProps) => {
  const StorepageData = await StoreQuery(locale);
  const storeCollection =  StorepageData?.storeCollection?.items[0]
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/store`, {
    headers: {
      language: locale || 'en',
    },
  });
  const AllStoredata = await res.json();
  const description = StorepageData?.storeCollection?.items[0]?.intro?.description?.json?.content[0]?.content[0]?.value;
  return (
    <PageLayout BreadcrumbData={storeCollection?.breadcrumb?.linksCollection?.items}>
      <div className="containerXL">
        <div className={Styles.storeHeadingCon}>
          <TitleWithDesc title={storeCollection?.intro?.title || ''} description={storeCollection?.intro?.description}/>
          {/* {StorepageData && <h2 className="h2">{StorepageData?.storeCollection?.items[0]?.intro?.title}</h2>}
          {description && <div className={Styles.paraGraph}>{description}</div>} */}
        </div>
      </div>
      <SearchForm AllStoredata={AllStoredata} pagedata={StorepageData?.storeCollection} lang={locale}/>
    </PageLayout>
  );
};

export default Store;
