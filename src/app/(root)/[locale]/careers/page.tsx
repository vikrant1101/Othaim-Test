import Button from '@/components/Button';
import TitleWithDesc from '@/components/headingWithDescription';
import PageLayout from '@/components/internalLayout';
import React from 'react';
import VisionCard from '../about-us/_component/visionCard';
import Styles from './index.module.scss';
import Image from 'next/image';
import CareersQuery from '@/contentful/queries/pages/careers';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ProgramCard from './_component/programCard';
import Divider from '@/components/Divider';
import { CARD } from '@/contentful/type/common';
type CareersProps = {
  params: { locale: string };
};
const Careers = async ({ params: { locale } }: CareersProps) => {
  const careersData = await CareersQuery(locale);
  const careersCollection = careersData?.careersCollection?.items[0];
  return (
    <PageLayout
      BreadcrumbData={careersCollection?.breadcrumb?.linksCollection?.items}
      bannerHeading={careersCollection?.innerBanner?.title}
    >
      <div className="container_outter">
        {careersCollection?.advantage ? (
          <div className="containerXL innerSpace">
            <div className="rowFlex">
              <div className="columnLg10">
                <TitleWithDesc
                  className={Styles.heading}
                  title={careersCollection?.advantage?.title || 'Advantages'}
                  description={careersCollection?.advantage?.description}
                />
              </div>
              <div className="columnLg2 dFlex justifyContentEndLg">
                <div className="dFlex  alignItemsEnd">
                  {careersCollection?.advantage?.linksCollection?.items?.map(({title,url,target,ariaLabel,variant}:any,idx:number)=>(
                    <Button
                    target={target}
                    key={`btn${idx}`}
                    className={Styles.btn}
                    varient={variant}
                    link={url}
                    label={title}
                    ariaLabel={ariaLabel}
                  />
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <Divider isHorizontal />
        {careersCollection?.employment ? (
          <div className="containerXL innerSpace">
            <TitleWithDesc
              title={careersCollection?.employment?.title || 'Employment'}
              description={careersCollection?.employment?.description}
            />
          </div>
        ) : null}
        {careersCollection?.remoteWorkProgram ? (
          <div className={Styles.bgColor}>
            <div className="containerXL innerSpace">
              <TitleWithDesc
                title={careersCollection?.remoteWorkProgram?.title || ''}
                description={careersCollection?.remoteWorkProgram?.description}
              />
              <div className={`${Styles.VisionCard} rowFlex rowGutters12`}>
                {careersCollection &&
                  careersCollection?.remoteWorkProgram?.cardsCollection?.items?.map(
                    (
                      { subTitle, backgroundImage, iconClass }: any,
                      idx: number
                    ) => (
                      <VisionCard
                        iconClass={iconClass}
                        subTitle={subTitle}
                        backgroundImage={backgroundImage}
                      />
                    )
                  )}
              </div>
            </div>
          </div>
        ) : null}
        {careersCollection?.programsOfCooperativeTraining?.backgroundImage
          ?.image?.url ? (
          <div className={Styles.bgImage}>
            <Image
              height={
                careersCollection?.programsOfCooperativeTraining
                  ?.backgroundImage?.image?.height
              }
              width={
                careersCollection?.programsOfCooperativeTraining
                  ?.backgroundImage?.image?.width
              }
              src={
                careersCollection?.programsOfCooperativeTraining
                  ?.backgroundImage?.image?.url || ''
              }
              alt={
                careersCollection?.programsOfCooperativeTraining
                  ?.backgroundImage?.alt || ''
              }
              aria-label={
                careersCollection?.programsOfCooperativeTraining
                  ?.backgroundImage?.ariaLabel
              }
            />
            <div className="containerXL innerSpace">
              <TitleWithDesc
                title={
                  careersCollection?.programsOfCooperativeTraining?.title || ''
                }
                description={
                  careersCollection?.programsOfCooperativeTraining?.description
                }
              />
            </div>
          </div>
        ) : null}
        {careersCollection?.programsOfCooperative ? (
          <div className={Styles.bgColor}>
            <div className={`containerXL  `}>
              <div className={Styles.trainig}>
                <TitleWithDesc
                  title={careersCollection?.programsOfCooperative?.title || 'amn'}
                  description={
                    careersCollection?.programsOfCooperative?.description
                  }
                />
                <div className={Styles.VisionCard}>
                  <ProgramCard
                    collection={
                      careersCollection?.programsOfCooperative?.cardsCollection
                        ?.items
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {careersCollection?.growYourCareerFaster ? (
          <div className={`containerXL ${Styles.careers}`}>
            <div className={Styles.bgLightGreen}>
              <div className={`${Styles.mbCareer} contentCenter`}>
                <div className="h2">
                  {careersCollection?.growYourCareerFaster?.title}
                </div>
                <div>
                  {documentToReactComponents(
                    careersCollection?.growYourCareerFaster?.description?.json
                  )}
                </div>
                <div className="dFlex justifyContentCenter gap24">
                  {careersCollection?.growYourCareerFaster?.linksCollection?.items?.map(
                    ({ title, ariaLabel, url, variant, target }: any) => (
                      <Button
                        className={Styles.btn}
                        link={url}
                        ariaLabel={ariaLabel}
                        label={title}
                        varient={variant}
                        target={target}
                      />
                    )
                  )}
                </div>
              </div>
              <Image
                className={Styles.brushLeft}
                src="/img/brush.svg"
                height={350}
                width={754}
                alt=""
              />
              <Image
                className={Styles.brushRight}
                src="/img/brush.svg"
                height={350}
                width={754}
                alt=""
              />
            </div>
          </div>
        ) : null}
      </div>
    </PageLayout>
  );
};

export default Careers;
