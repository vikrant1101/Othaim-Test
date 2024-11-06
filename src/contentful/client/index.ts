import {
    SPACE_ID,
    ENVIRONMENT,
    DELIVERY_TOKEN,
  } from '@/contentful/config';
  import sanitizeResponse from '@/contentful/helpers/sanitize';
  
  export default async function fetchGraphql({ query, isAutoRevalidate }: { query: string, isAutoRevalidate?: boolean }) {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${DELIVERY_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query,
        }),
        next: { revalidate: 10 },
      },
    );
    const output = await response.json();
    if (output.data) {
      return sanitizeResponse(output);
    } else if (output.errors) {
      throw new Error(JSON.stringify(output.errors));
    }
  }
  