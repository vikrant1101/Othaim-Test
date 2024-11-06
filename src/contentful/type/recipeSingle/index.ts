import { IMAGE } from "../common";

export interface TEMPLATE_RECIPESINGLE_COLLECTION {
    title: string,
    ingredientsCount: string,
    recipeTime: string,
    singleImage: IMAGE,
    ingredients:{
        json: any
      }
      content:{
        json:any
      }
}
export type Weather = {
    recipePostsCollection: {
        items: TEMPLATE_RECIPESINGLE_COLLECTION[];
    };
};