export interface YouTubeChannel {
  id: string;
  name: string;
  handle: string;
  category: string;
  totalViews: string;
  subscribers?: string;
  thumbnail: string;
  videoUrl?: string; // Replaceable video or embed
  channelUrl: string;
  featuredTitle?: string;
  badge?: string;
  description: string;
}

/**
 * YouTube Channels managed & scaled by Frameless Hub
 * Media paths are centralized here for simple replacement.
 */
export const YOUTUBE_CHANNELS: YouTubeChannel[] = [
  {
    id: "birlas-parvai",
    name: "Birlas Parvai",
    handle: "@BirlasParvai",
    category: "Regional Cinema & Documentary Journalism",
    totalViews: "4.8M+",
    subscribers: "120K+",
    thumbnail: "/campaigns/automotive.jpg",
    videoUrl: "/videos/video-1.mov",
    channelUrl: "https://youtube.com/@BirlasParvai",
    featuredTitle: "Investigative Vision & Cultural Discourse",
    badge: "Official Channel",
    description: "High-retention visual documentaries, long-form journalism, and cinematic cultural retrospectives engineered for organic viral distribution."
  },
  {
    id: "supratha-wellness",
    name: "Supratha Wellness",
    handle: "@SuprathaWellness",
    category: "Holistic Health, Clinical Science & Lifestyle",
    totalViews: "3.2M+",
    subscribers: "85K+",
    thumbnail: "/media/generated/web-digital-showcase.jpg",
    videoUrl: "/videos/video-3.mov",
    channelUrl: "https://youtube.com/@SuprathaWellness",
    featuredTitle: "Clinical Wisdom & Patient Stories",
    badge: "Healthcare IP",
    description: "Approachable clinical wellness breakdowns, physician masterclasses, and kinetic medical animations that establish institutional trust."
  },
  {
    id: "frameless-media",
    name: "Frameless Media",
    handle: "@FramelessMedia",
    category: "Original Studio IP & Creative Culture",
    totalViews: "2.4M+",
    subscribers: "60K+",
    thumbnail: "/media/generated/content-production-studio.jpg",
    videoUrl: "/videos/video-5.mov",
    channelUrl: "https://youtube.com/@FramelessMedia",
    featuredTitle: "Creative Direction & Agency Originals",
    badge: "Studio Flagship",
    description: "Experimental narrative formats, commercial director breakdowns, and digital art explorations produced directly by the studio."
  }
];

export const YOUTUBE_PERFORMANCE_METRICS = {
  totalViews: "10M+",
  metricLabel: "Total Verified Views",
  channelsCount: "3",
  primaryFocus: "Algorithmic Retention & Channel Architecture"
};
