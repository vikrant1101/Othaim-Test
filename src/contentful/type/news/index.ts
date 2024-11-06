import { BREADCRUMB, INNERBANNER } from "../common";

export interface TEMPLATE_NEWS_COLLECTION {
   breadcrumb: BREADCRUMB
   innerBanner: INNERBANNER
}
export type Weather = {
    newsCollection: {
        items: TEMPLATE_NEWS_COLLECTION[];
    };
};