import TitleWithDesc from '@/components/headingWithDescription';
import PageLayout from '@/components/internalLayout';
import React from 'react';
import Styles from './index.module.scss';
import Image from 'next/image';
import MeetOurTeamQuery from '@/contentful/queries/pages/meetOurTeam';
import TeamCard from './_component/card';
type MeetOurTeamProps = {
  params: { locale: string };
};
const MeetOurTeam = async ({ params: { locale } }: MeetOurTeamProps) => {
  const meetOurTeamData = await MeetOurTeamQuery(locale);
  const metOurTeamDataCollection =
    meetOurTeamData?.meetOurTeamCollection?.items[0];
  return (
    <PageLayout
      BreadcrumbData={metOurTeamDataCollection?.breadcrumb?.linksCollection?.items}
      bannerHeading={metOurTeamDataCollection?.innerBanner?.title}
    >
      <div className={`containerXL innerSpace ${Styles.innerSpace}`}>
        {metOurTeamDataCollection?.intro ? (
          <TitleWithDesc
            title={metOurTeamDataCollection?.intro?.title || ''}
            description={metOurTeamDataCollection?.intro?.description}
          />
        ) : null}
        {metOurTeamDataCollection?.teamsCollection?.items ? (
          <div className={Styles.outTeamCon}>
            <TeamCard
              teamsCollection={metOurTeamDataCollection?.teamsCollection?.items}
            />
          </div>
        ) : null}
      </div>
    </PageLayout>
  );
};

export default MeetOurTeam;
