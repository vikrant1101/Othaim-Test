import { BREADCRUMB, CARD, INNERBANNER } from "../common";

export interface TEMPLATE_OUR_BRAND_COLLECTION {
   innerBanner: INNERBANNER,
   intro: CARD,
   brandPostsCollection: {
    items: CARD[]
   },
   breadcrumb: BREADCRUMB,
}
export type Weather = {
    ourBrandsCollection: {
        items: TEMPLATE_OUR_BRAND_COLLECTION[];
    };
};