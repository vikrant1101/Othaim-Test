import { INNERBANNER, CARD, BREADCRUMB } from "../common";

export interface TEMPLATE_CONTACT_US_COLLECTION {
   innerBanner: INNERBANNER,
   contactLeftBarCollection: {
    items: CARD[]
   },
   contactFormField: Object,
   breadcrumb: BREADCRUMB,
}
export type Weather = {
    contactPageCollection: {
        items: TEMPLATE_CONTACT_US_COLLECTION[];
    };
};