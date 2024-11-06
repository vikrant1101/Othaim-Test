import React from 'react';
import Styles from './index.module.scss';
import TitleWithDesc from '@/components/headingWithDescription';
import PrivacyPolicyQuery from '@/contentful/queries/pages/privacy-policy';

type PrivacyProps = {
  params: { locale: string };
};

const PrivacyPolicy = async ({ params: { locale } }: PrivacyProps) => {
  const privacyPolicyData = await PrivacyPolicyQuery(locale);
  const privacyPolicyCollection = privacyPolicyData?.privacyPolicyPageCollection?.items[0];
  

  return (
    <div className={`containerXL innerSpace ${Styles.privacyPolicy}`}>
    <div>
      {/* First Section with title and dynamic content */}
      <div className={Styles.contentBox}>
        <TitleWithDesc
          title={privacyPolicyCollection?.title || 'Privacy Policy'}
          description={privacyPolicyCollection?.content}
        />
      </div>
    </div>
  </div>
  );
};

export default PrivacyPolicy;
