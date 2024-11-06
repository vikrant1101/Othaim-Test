import SingleNews from '../_component/SingleNews';
import { Metadata } from 'next';

type PageProps = {
  params: { locale: string; slug: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://othaim-market.local.doabl.tech/';

  console.log('Fetching metadata for slug:', slug);

  try {
    const res = await fetch(`${baseUrl}/api/news/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch news data');

    const data = await res.json();
    console.log('Fetched data:', data);

    return {
      title: data.title || 'Default Title',
      description: data.details || 'Detailed article information',
      openGraph: {
        url: `${baseUrl}/news/${slug}`,
        title: data.title,
        description: data.details,
        images: [
          {
            url: data.pic || `${baseUrl}/default-image.jpg`,
            alt: data.title || 'News Image',
          },
        ],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: data.title,
        description: data.details,
        images: [data.pic || `${baseUrl}/default-image.jpg`],
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: 'Article Not Found',
      description: 'This article could not be found.',
    };
  }
}


export default function NewsPage({ params }: PageProps) {
  return <SingleNews params={params} />;
}
