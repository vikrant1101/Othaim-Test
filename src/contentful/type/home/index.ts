import { CARD } from "../common";

export interface TEMPLATE_HOME_COLLECTION {
   title: string,
   slider:{
    title: string,
    cardsCollection: {
        items: CARD[]
    },
    tilesCollection:{
        items: CARD[]
    },
    belowBannerTiles: CARD,
    dailyRecipe: CARD,
    social: CARD,
    introduction: CARD,
    annualReports: CARD,
    ourMission: CARD,
    ourHistory: CARD,
    careers: CARD,
    gallery: CARD
   }
}
export type Weather = {
    homePageCollection: {
        items: TEMPLATE_HOME_COLLECTION[];
    };
};