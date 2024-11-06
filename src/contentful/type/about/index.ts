import { CARD, INNERBANNER, MESSAGES } from "../common";

export interface TEMPLATE_ABOUT_COLLECTION {
   breadcrumb: any;
   title: string,
   innerBanner: INNERBANNER,
   aboutCompany: CARD,
   messagesCollection: {
    items: MESSAGES[]
   },
   ourMission: CARD,
   aboveFooter: CARD
   
}
export type Weather = {
    aboutUsCollection: {
        items: TEMPLATE_ABOUT_COLLECTION[];
    };
};