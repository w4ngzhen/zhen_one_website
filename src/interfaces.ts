export interface SiteInfo {
  title: string;
  url: { display: string; target: string } | string;
  disabled?: boolean;
}
