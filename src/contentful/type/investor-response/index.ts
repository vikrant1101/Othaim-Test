import { BREADCRUMB, CARD, CARDS, INNERBANNER, SHAREINFOCARD } from "../common";

export interface TEMPLATE_INVESTORE_COLLECTION {
    innerBanner: INNERBANNER,
    intro: CARD,
    shareInformationCollection:{
        items: SHAREINFOCARD[]
    },
    companyAnnouncements: CARD,
    annualReports: CARDS,
    annualReportsCollection:  {
        items: CARDS[]
    },
    breadcrumb: BREADCRUMB,
}
export type Weather = {
    investorsPageCollection: {
        items: TEMPLATE_INVESTORE_COLLECTION[];
    };
};