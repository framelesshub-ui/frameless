export interface StudioStat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const HERO_STATS: StudioStat[] = [
  {
    value: 399,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across video, branding, campaigns & digital IP"
  },
  {
    value: 10,
    suffix: "M+",
    label: "Views Generated",
    description: "Organic attention captured across channels"
  },
  {
    value: 35,
    suffix: "+",
    label: "Clients",
    description: "Ambitious brands and industry leaders"
  },
  {
    value: 3,
    suffix: "x",
    label: "Average Growth",
    description: "Channel, engagement & conversion scaling"
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Consistent multi-year partnerships"
  }
];

export const ABOUT_HIGHLIGHTS = [
  { label: "Projects Delivered", value: "399+" },
  { label: "Views Generated", value: "10M+" },
  { label: "Studio Headquarters", value: "Chennai, India" },
  { label: "Audience Reach", value: "Global Clientele" },
  { label: "Studio Inception", value: "Established 2026" }
];
