import { BREADCRUMB, CARD, INNERBANNER, TEAMMEMBER } from "../common";

export interface TEMPLATE_MEETTEAM_COLLECTION {
   innerBanner: INNERBANNER,
   intro: CARD,
   teamsCollection: {
    items: TEAMMEMBER[]
   },
   breadcrumb: BREADCRUMB,
}
export type Weather = {
    meetOurTeamCollection: {
        items: TEMPLATE_MEETTEAM_COLLECTION[];
    };
};