export interface FooterProps {
  menu: MenuItem[];
  socialLinks: SocialLink[];
  legalMenu: LegalMenuItem[];
}

export interface MenuItem {
  id: string;
  title: string;
  path: string;
}

export interface SocialLink {
  id: string;
  title: string;
  path: string;
}

export interface LegalMenuItem {
  id: string;
  title: string;
  path: string;
}

export enum SocialLinksType {
  FB = 'facebook',
  TW = 'twitter',
  LN = 'linkedin',
  YT = 'youtube',
}
