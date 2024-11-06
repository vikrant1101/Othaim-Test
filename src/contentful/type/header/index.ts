import { IMAGE, LINKS, SELECT } from "../common";

export interface TEMPLATE_HEADER_COLLECTION {
   title: string,
   storeLocater: LINKS,
   languageCollection: {
    items: SELECT[]
   }
   menuCollection:{
    items: LINKS[]
   },
   actionCollection:{
    items: LINKS[]
   },
   logo:{
    image: IMAGE
   },
   defaultStore: {
    Phone1: string
    Address: string,
    StoreId: Number,
    CityName: string,
    Latitude: string,
    Longitude: string,
    StoreName: string,
    StoreType: string,
    RegionName: string
   }
}
export type Weather = {
    headerCollection: {
        items: TEMPLATE_HEADER_COLLECTION[];
    };
};