import { INNERBANNER, CARD } from "../common";

export interface TEMPLATE_PRIVACY_POLICY_COLLECTION {
    title:string,
    content: {
        json: any
    }
}
export type Weather = {
    privacyPolicyPageCollection: {
        items: TEMPLATE_PRIVACY_POLICY_COLLECTION[];
    };
};