import { INNERBANNER, ACCORDION, LINKS } from "../common";

export interface TEMPLATE_COKKIE_POLICY_COLLECTION {
    title: string,
    description:{
        json: any
    },
    checkboxText: string,
    button: LINKS
}
export type Weather = {
    cokkiePolicyPopupCollection: {
        items: TEMPLATE_COKKIE_POLICY_COLLECTION[];
    };
};