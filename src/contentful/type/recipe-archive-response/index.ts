import { BREADCRUMB, INNERBANNER } from "../common";

export interface TEMPLATE_RECIPE_ARCHIVE_COLLECTION {
   breadcrumb: BREADCRUMB
   innerBanner: INNERBANNER
}
export type Weather = {
    newsCollection: {
        items: TEMPLATE_RECIPE_ARCHIVE_COLLECTION[];
    };
};