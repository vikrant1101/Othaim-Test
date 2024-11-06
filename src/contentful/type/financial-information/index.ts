import { BREADCRUMB, INNERBANNER,   TABS } from "../common";

export interface TEMPLATE_FINANCIAL_INFORMATION_COLLECTION {
    innerBanner: INNERBANNER,
    tabsCollection: {
        items: TABS[]
    },
    breadcrumb: BREADCRUMB,
}
export type Weather = {
    financialInformationPageCollection: {
        items: TEMPLATE_FINANCIAL_INFORMATION_COLLECTION[];
    };
};