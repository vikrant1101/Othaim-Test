import { IMAGE, LINKS } from "../common";

export interface TEMPLATE_FOOTER_COLLECTION {
    logo:{
        image: IMAGE
    },
    stayCard:{
        title: string,
        description:{
            json: any
        }
    }
    socialLinksCollection:{
        items: LINKS[]
    },
    footerMenuCollection:{
        items: LINKS[]
    }
   copyright: string,
 
}
export type Weather = {
    footerCollection: {
        items: TEMPLATE_FOOTER_COLLECTION[];
    };
};