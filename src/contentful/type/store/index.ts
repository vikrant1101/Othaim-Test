import { BREADCRUMB, CARD, LINKS } from "../common";

export interface TEMPLATE_STORE_COLLECTION {
    title: string,
    selectCityText: string,
    selectRegionText: string,
    selectStoreTypeText: string,
    intro: CARD,
    breadcrumb: BREADCRUMB,
    button: LINKS
}
export type Weather = {
    storeCollection: {
        items: TEMPLATE_STORE_COLLECTION[];
    };
};