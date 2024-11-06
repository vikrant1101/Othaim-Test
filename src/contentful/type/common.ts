import { title } from 'process';
export interface BUTTON {
  title: string;
  url: string;
  variant: any;
  ariaLabel: string;
  target: string;
}

export interface IMAGE {
  image: {
    height: number;
    width: number;
    url: string;
  };
  alt: string;
  ariaLabel: string;
  role: string;
}

export interface INNERBANNER {
  title: string;
  description: {
    json: any;
  };
}

export interface CARDS {
  showhide?: boolean;
  variant?: string;
  length?: number;
  badgeTitle?: string;
  icon?: string;
  iconClass?: string;
  title?: string;
  description?: {
    json: any;
  };
  buttonsCollection?: {
    items: BUTTON[];
  };
  cardsCollection?: {
    items: CARD[];
  };
  imagesCollection?: {
    items: IMAGE[];
  };
  statsCollection?: {
    items: STATSCOLLECTION[];
  };
  listsCollection?: {
    items: LISTS[];
  };
  background?: IMAGE;
}
export interface CARD {
  className?: string;
  icon?: string;
  badgeTitle?: string;
  title?: string;
  iconClass?: string;
  descriptiontitle?: string;
  shareTitle?: string;
  variant?: string;
  sharePriceText?: string;
  shrePriceChangeText?: string;
  backgroundImage?: IMAGE;
  description?: {
    json: any;
  };
  buttonsCollection?: {
    items: BUTTON[];
  };
  cardsCollection?: {
    items: CARD[];
  };
  imagesCollection?: {
    items: IMAGE[];
  };
  linksCollection?: {
    items: LISTS[];
  };
}
export interface LINKS {
  title: string;
  url: string;
  iconClass: string;
  variant: string;
  target: string;
  ariaLabel: string;
  isDropdown: boolean;
  dropdownCollection: {
    items: LINK[];
  };
}

export interface STATS {
  stat: string;
  description: {
    json: any;
  };
}

export interface STATSCOLLECTION {
  stat?: string;
  statsDescription?: string;
}

export interface LISTS {
  description?: {
    json?: any;
  };
  title: string;
  url: string;
  target: string;
  variant?: string;
}

export interface LINK {
  title: string;
  url: string;
  target: string;
  showDropdown: boolean;
  iconClass?: string;
  shortDescription: string;
}

export interface FaqCollection {
  title?: string;
  faqsCollection?: {
    items: LISTS[];
  };
}

export interface SELECT {
  title: string;
  value: string;
}

export interface MESSAGES {
  title?: string;
  description?: {
    json?: any;
  };
  authorTitle?: string;
  authorDesignation?: string;
  authorImage?: {
    url?: string;
    height?: string;
    width?: string;
    title?: string;
  };
}
export interface TEAMMEMBER {
  title?: string;
  designation?: string;
  thumbnail?: IMAGE;
}

export interface ACCORDION{
  title?: string;
  content?:{
    json: any
  }
}

export interface PDFMEDIA{
  title: string,
  iconClass: string,
  pdf:{
    url: string
  }
}
export interface TABCARD{
  title:string,
  linksCollection:{
    items: PDFMEDIA[]
  }
}

export interface TABS{
    title: string,
    content:{
      json:any
    }
    linksCollection:{
      items: CARD[]
    }
}

export interface SHAREINFOCARD{
  title: string,
  content: string 
}

export interface BREADCRUMB{
  linksCollection:{
    items: {
      title: string,
      url: string
    }
  }
}