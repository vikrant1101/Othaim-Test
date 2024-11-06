import { IMAGE } from "../common";

export interface TEMPLATE_SEO_META_COLLECTION {
    metaTitle?: string,
    metaDescription?: string,
    canonical?: string,
    robots:{
        robotsIndex?: boolean
        robotsFollow?: boolean,
        robotsCache?: boolean,
        googleBotIndex?: boolean,
        googleBotFollow?: boolean,
        googleBoatNoImageIndex?: boolean,
        googleMaxImagePreview?: string,
        googleMaxVideoPreview:  number
        googleMaxSnippet?: number
    },
    ogTitle?: string,
    ogDescription?: string,
    ogImage?: IMAGE
}
export type Weather = {
    seoMetaCollection: {
        items: TEMPLATE_SEO_META_COLLECTION[];
    };
};