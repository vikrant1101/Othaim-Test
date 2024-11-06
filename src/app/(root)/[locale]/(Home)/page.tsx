import Divider from '@/components/Divider';
import Introduction from './Introduction';
import AnnualReport from './annualReport';
import OurMission from './ourMission';
import Careers from './careers';
import OurHistory from './ourHistory';
import HomeQuery from '@/contentful/queries/pages/home';
import HomeBanner from './HomeBanner';
import BannerCard from './BannerCard';
import Gallery from './gallery';
import Social from './social';
import SeoMetaData from '@/contentful/queries/pages/seoMeta';

export async function generateMetadata() {
  const metaData = await SeoMetaData('/');

  if (metaData) {
    return {
      title: metaData?.seoMetaCollection?.items[0]?.metaTitle,
      metaDescription: metaData?.seoMetaCollection?.items[0]?.metaDescription,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      }
    };
  } else {
    return {}
  }
}

type HomeProps = {
  params: { locale: string };
};
async function fetchSocialData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/instagram`);
    if (!res.ok) throw new Error('Failed to fetch social data');
    return await res.json();
  } catch (error) {
    console.error('Error fetching social data:', error);
    return null;
  }
}
export default async function Home({ params: { locale } }: HomeProps) {
  const homePagedata = await HomeQuery(locale == 'ar' ? 'ar' : '');
  const socialData = await fetchSocialData();

  const {
    quickLinks: quickLinks,
    dailyRecipe: dailyRecipe,
    social: social,
    ourMission: ourMission,
    belowBannerTiles: belowBannerTiles,
    introduction: introduction,
    careers: careers,
    slider: slider,
    annualReports: annualReports,
    ourHistory: ourHistory,
    gallery: gallery,
  }: any = homePagedata?.homePageCollection?.items[0];

  return (
    <div className="container_outter">
      {slider ? <HomeBanner slider={slider} locale={locale} /> : null}
      {belowBannerTiles ? (
        <BannerCard tilesCollection={belowBannerTiles} locale={locale} />
      ) : null}
      {/* {<Recipes locale={locale} dailyRecipe={dailyRecipe} />} */}
      {socialData ? (
        <Social
          locale={locale}
          socialData={socialData.data}
          socialTitle={social?.title}
        />
      ) : null}
      {introduction ? <Introduction introduction={introduction} /> : null}
      {annualReports ? <AnnualReport annualReports={annualReports} /> : null}
      {ourMission ? <OurMission ourMission={ourMission} /> : null}
      {ourHistory ? (
        <OurHistory ourHistory={ourHistory} locale={locale} />
      ) : null}
      {careers ? <Careers careers={careers} /> : null}
      <Divider isHorizontal />
      {<Gallery locale={locale} gallery={gallery} />}
    </div>
  );
}
