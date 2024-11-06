import { BREADCRUMB, CARD, INNERBANNER } from "../common";

export interface TEMPLATE_AWARENESS_PROGRAM_COLLECTION {
   innerBanner: INNERBANNER,
   intro: CARD,
   clientProtection: CARD,
   respectPrivacy: CARD,
   respectOfCulturalFeatures: CARD
   breadcrumb: BREADCRUMB,
}
export type Weather = {
    awarenessProgramCollection: {
        items: TEMPLATE_AWARENESS_PROGRAM_COLLECTION[];
    };
};