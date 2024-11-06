import { BREADCRUMB, CARD, INNERBANNER } from "../common";

export interface TEMPLATE_CAREERS_COLLECTION {
   innerBanner: INNERBANNER,
   advantage: CARD,
   employment: CARD,
   remoteWorkProgram: CARD,
   programsOfCooperative: CARD,
   programsOfCooperativeTraining: CARD,
   growYourCareerFaster: CARD,
   breadcrumb: BREADCRUMB,
}
export type Weather = {
    careersCollection: {
        items: TEMPLATE_CAREERS_COLLECTION[];
    };
};