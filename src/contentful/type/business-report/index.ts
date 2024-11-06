import { CARD, INNERBANNER, MESSAGES } from '../common';
import { TEMPLATE_HISTORY_COLLECTION } from '../history';

export interface TEMPLATE_BUSINESS_REPORT_COLLECTION {
  innerBanner: INNERBANNER;
  intro: CARD;
  fiscalYearsCollection: {
    items: CARD[];
  };
}
export type Weather = {
  businessReportCollection: any;
  historyPageCollection: {
    items: TEMPLATE_HISTORY_COLLECTION[];
  };
};
