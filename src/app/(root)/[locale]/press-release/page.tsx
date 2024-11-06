import PageLayout from '@/components/internalLayout';
import React from 'react';
import Styles from './index.module.scss';
import PressReleaseForm from './_componnet/formFields';

type PressHolderProps = {
  params: { locale: string };
};

const PressHolder = async ({ params: { locale } }: PressHolderProps) => {
  const titleBanner = 'Press Release';
  let data = [
    { url: '/', title: 'Home' },
    { url: '', title: 'Press Release' },
  ];
  return (
    <PageLayout BreadcrumbData={data} bannerHeading={titleBanner}>
      <div className={`containerXL innerSpaceMd ${Styles.mainSharePanel}`}>
        <p>Select the Period to reach the desired announcements 04 January 2016</p>
        <PressReleaseForm locale={locale} />
      </div>
    </PageLayout>
  );
};

export default PressHolder;
