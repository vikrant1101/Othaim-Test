import { BREADCRUMB, CARD, INNERBANNER, MESSAGES } from "../common";

export interface TEMPLATE_HISTORY_COLLECTION {
   title: string,
   innerBanner: INNERBANNER,
   intro: CARD,
   historyCardCollection: {
    items: CARD[]
   },
   breadcrumb: BREADCRUMB,
}
export type Weather = {
    historyPageCollection: {
        items: TEMPLATE_HISTORY_COLLECTION[];
    };
};