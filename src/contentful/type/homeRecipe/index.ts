import { IMAGE } from "../common";

export interface TEMPLATE_HOMERECIPE_COLLECTION {
   title: string,
   excerpt: string,
   ingredientsCount: string,
   recipeTime: string,
   thumbnail: IMAGE
}
export type Weather = {
    recipePostsCollection: {
        items: TEMPLATE_HOMERECIPE_COLLECTION[];
    };
};