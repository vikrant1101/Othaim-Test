import PageLayout from '@/components/internalLayout';
import React from 'react';
import Styles from './index.module.scss';
import SingleCard from '@/components/cards/card2';
import Image from 'next/image';
import AboutusQuery from '@/contentful/queries/pages/aboutus';
import Messages from './_component/messages';
import Zpattern from '@/components/Zpattern';
import VisionCard from './_component/visionCard';
import useEqualHeight from '@/util/hooks/useEqualHeight';
import TitleWithDesc from '@/components/headingWithDescription';
type AboutUsProps = {
  params: { locale: string };
};
const AboutUs = async ({ params: { locale } }: AboutUsProps) => {
  const aboutPagedata = await AboutusQuery(locale == 'ar' ? 'ar' : '');
  const aboutCollection = aboutPagedata.aboutUsCollection?.items[0];
  return (
    <PageLayout
      BreadcrumbData={aboutCollection?.breadcrumb?.linksCollection?.items}
      bannerHeading={aboutCollection?.innerBanner?.title}
    >
      {aboutCollection?.aboutCompany ? (
        <div className={Styles.aboutCompany}>
          <Zpattern dataCollection={aboutCollection?.aboutCompany} />
        </div>
      ) : null}
      {aboutCollection?.messagesCollection?.items ? (
        <div className={`${Styles.messages}  innerSpace`}>
          <div className="containerXL">
            <div className="rowFlex rowGutters12">
              {aboutCollection?.messagesCollection?.items &&
                aboutCollection?.messagesCollection?.items?.map(
                  (messages: any) => (
                    <Messages
                      messages={messages?.title}
                      description={messages?.description}
                      authorDesignation={messages?.authorDesignation}
                      authorTitle={messages?.authorTitle}
                      authorImg={messages?.authorImage?.url}
                    />
                  )
                )}
            </div>
          </div>
        </div>
      ) : null}

      <div className={`${Styles.ourMission} containerXL innerSpace`}>
        <div className={`${Styles.gap32} rowFlex`}>
          <div className="columnMd6">
            {aboutCollection?.ourMission?.imagesCollection?.items[0]?.image
              .url && (
              <Image
                aria-label={
                  aboutCollection?.ourMission?.imagesCollection?.items[0]
                    ?.ariaLabel
                }
                role={
                  aboutCollection?.ourMission?.imagesCollection?.items[0]?.role
                }
                src={
                  aboutCollection?.ourMission?.imagesCollection?.items[0]?.image
                    .url || ''
                }
                alt={
                  aboutCollection?.ourMission?.imagesCollection?.items[0]
                    ?.alt || 'Our Mission'
                }
                height={740}
                width={792}
              />
            )}
          </div>

          <div className="columnMd6">
            {aboutCollection?.ourMission && (
              <div
                className={`${Styles.ourMission} dFlex justifyContentCenter alignItemsCenter`}
              >
                <TitleWithDesc
                  className={Styles.maxWidth}
                  title={aboutCollection?.ourMission?.title || ''}
                  description={aboutCollection?.ourMission?.description}
                />

                {/* <SingleCard
                style={{ maxWidth: '654px' }}
                title={aboutCollection?.ourMission?.title}
                description={aboutCollection?.ourMission?.description}
              /> */}
              </div>
            )}
          </div>
        </div>
      </div>
      {aboutCollection?.aboveFooter?.cardsCollection?.items && (
        <div className={`${Styles.visionValue} containerXL innerSpace pt0`}>
          <div className={`${Styles.gapMd24} rowFlex rowGutters12`}>
            {aboutCollection?.aboveFooter?.cardsCollection?.items.map(
              (
                { title, subTitle, backgroundImage, iconClass }: any,
                idx: number
              ) => (
                <VisionCard
                  key={`cardsCollection-${idx}`}
                  iconClass={iconClass}
                  title={title}
                  subTitle={subTitle}
                  backgroundImage={backgroundImage}
                />
              )
            )}
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default AboutUs;
