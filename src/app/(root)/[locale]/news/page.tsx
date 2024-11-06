import PageLayout from '@/components/internalLayout';
import { GetNews } from './_component/News';
import { Metadata } from 'next';
import NewsQuery from '@/contentful/queries/pages/news';

export const metadata: Metadata = {
  title: 'News',
};
type NewsProps = {
  params: { locale: string };
};

export default async function NewsPage({ params: { locale } }: NewsProps) {
  const newsData = await NewsQuery(locale)
  const newsCollection = newsData?.newsCollection?.items[0]
  return (
    <PageLayout
      BreadcrumbData={newsCollection?.breadcrumb?.linksCollection?.items}
      bannerHeading={newsCollection?.innerBanner?.title}
    >
      <GetNews locale={locale} />
    </PageLayout>
  );
}
