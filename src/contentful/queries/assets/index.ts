import fetchGraphql from '@/contentful/client';

export default async function AssetQuery({
  assetId,
}: {
  assetId: string;
}): Promise<{
  fileName: string;
  title: string;
  description?: string;
  url: string;
  width: number;
  height: number;
}> {
  const { data } = await fetchGraphql({
    query: `query {
        asset(id: "${assetId}") {
          fileName
          title
          description
          height
          width
          url
        }
      }`,
  });

  return data?.asset;
}
