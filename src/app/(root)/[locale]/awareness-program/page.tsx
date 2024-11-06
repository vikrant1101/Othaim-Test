import TitleWithDesc from '@/components/headingWithDescription';
import PageLayout from '@/components/internalLayout';
import AwarenessProgramQuery from '@/contentful/queries/pages/awarenessProgram';
import React from 'react';
import Styles from './index.module.scss';
import ProgramCard from '../careers/_component/programCard';
import VisionCard from '../about-us/_component/visionCard';
import ProgramsCard from './_component/programCard';
import Image from 'next/image';
import { CARD } from '@/contentful/type/common';
type AwarenessProps = {
  params: { locale: string };
};
const AwarenessProgram = async ({ params: { locale } }: AwarenessProps) => {
  const awarenessProgram = await AwarenessProgramQuery(locale);
  const awarenessProgramData =
    awarenessProgram?.awarenessProgramCollection?.items[0];
  return (
    <PageLayout
      BreadcrumbData={awarenessProgramData?.breadcrumb?.linksCollection?.items}
      bannerHeading={awarenessProgramData?.innerBanner?.title}
    >
      <div className="containerXL innerSpace">
        <TitleWithDesc
          title={awarenessProgramData?.intro?.title || ''}
          description={awarenessProgramData?.intro?.description}
        />
      </div>
      <div className={Styles.bgColor}>
        <div className={`containerXL innerSpace ${Styles.innerSpace}`}>
          <TitleWithDesc
            title={
              awarenessProgramData?.clientProtection?.title ||
              'Client Protection'
            }
            description={awarenessProgramData?.clientProtection?.description}
          />
          <div className={Styles.clientProtection}>
            <ProgramCard
              collection={
                awarenessProgramData?.clientProtection?.cardsCollection?.items
              }
            />
          </div>
        </div>
      </div>
      {awarenessProgramData?.respectPrivacy?.backgroundImage?.image?.url ? (
        <div className={Styles.bgImage}>
          <Image
            src={
              awarenessProgramData?.respectPrivacy?.backgroundImage?.image
                ?.url || ''
            }
            alt={
              awarenessProgramData?.respectPrivacy?.backgroundImage?.alt || ''
            }
            width={
              awarenessProgramData?.respectPrivacy?.backgroundImage?.image
                ?.width
            }
            height={
              awarenessProgramData?.respectPrivacy?.backgroundImage?.image
                ?.height
            }
          />
        </div>
      ) : null}

      <div className="containerXL innerSpace">
        <TitleWithDesc
          title={awarenessProgramData?.respectPrivacy?.title || ''}
          description={awarenessProgramData?.respectPrivacy?.description}
        />
        {awarenessProgramData?.respectPrivacy ? (
          <div className={Styles.respectPrivacy}>
            <TitleWithDesc
              as="h5"
              title={
                awarenessProgramData?.respectPrivacy?.cardsCollection?.items[0]
                  .title || ''
              }
              description={
                awarenessProgramData?.respectPrivacy?.cardsCollection?.items[0]
                  .description || ''
              }
            />
            <div className={Styles.VisionCard}>
              <ProgramsCard
                collection={
                  awarenessProgramData?.respectPrivacy?.cardsCollection
                    ?.items[0].cardsCollection?.items
                }
              />
            </div>
          </div>
        ) : null}
        {awarenessProgramData.respectOfCulturalFeatures && (
          <div className={Styles.respectPrivacy}>
            <TitleWithDesc
              as="h5"
              title={
                awarenessProgramData?.respectOfCulturalFeatures?.title || ''
              }
              description={
                awarenessProgramData?.respectOfCulturalFeatures?.description
              }
            />
            <div className={`${Styles.VisionCard} rowFlex rowGutters12`}>
              {awarenessProgramData?.respectOfCulturalFeatures?.cardsCollection?.items?.map(
                ({ title, backgroundImage, iconClass }: CARD, idx: number) => (
                  <VisionCard
                    iconClass={iconClass}
                    subTitle={title}
                    backgroundImage={backgroundImage}
                  />
                )
              )}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default AwarenessProgram;
