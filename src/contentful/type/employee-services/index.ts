import { BREADCRUMB, CARD, CARDS, INNERBANNER } from "../common";

export interface TEMPLATE_EMPLOYEES_SERVICES_COLLECTION {
    innerBanner: INNERBANNER,
    intro: CARD,
    cardsCollection:  {
        items: CARDS[]
    },
    breadcrumb: BREADCRUMB,
}
export type Weather = {
    employeeServicesCollection: {
        items: TEMPLATE_EMPLOYEES_SERVICES_COLLECTION[];
    };
};