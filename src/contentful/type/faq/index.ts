import { INNERBANNER, ACCORDION, BREADCRUMB } from "../common";

export interface TEMPLATE_FAQ_COLLECTION {
   innerBanner: INNERBANNER,
   faqCollection: {
    items: ACCORDION[]
   },
   breadcrumb: BREADCRUMB,
}
export type Weather = {
    faqPageCollection: {
        items: TEMPLATE_FAQ_COLLECTION[];
    };
};