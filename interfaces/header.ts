export interface HeaderProps {
  auth: string[];
  menu: string[];
  icons: HeaderIcon[];
}

export interface HeaderIcon {
  name: string;
  count: number | null;
}
