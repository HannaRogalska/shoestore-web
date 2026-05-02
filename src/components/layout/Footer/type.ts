export interface FooterLinkType {
  id: string;
  link: string
}

export interface FooterDataType {
  id: string;
  title: string;
  body: FooterLinkType[];
}
