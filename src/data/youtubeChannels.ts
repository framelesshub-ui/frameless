export interface YouTubeChannel {
  id: string;
  name: string;
  handle: string;
  category: string;
  totalViews: string;
  subscribers?: string;
  thumbnail: string;
  videoUrl?: string; // YouTube embed or watch link
  channelUrl: string;
  featuredTitle?: string;
  badge?: string;
  description: string;
  latestVideoId?: string;
  latestVideoTitle?: string;
}

/**
 * YouTube Channels managed & scaled by Frameless Hub
 * Featuring actual latest channel uploads and live verified links.
 */
export const YOUTUBE_CHANNELS: YouTubeChannel[] = [
  {
    id: "birlas-parvai",
    name: "Birlas Parvai",
    handle: "@birlasparvai",
    category: "Automotive Reviews & Investigative Journalism",
    totalViews: "4.8M+",
    subscribers: "120K+",
    thumbnail: "https://i.ytimg.com/vi/Tt-_PByi6KM/hq720.jpg",
    videoUrl: "https://www.youtube.com/embed/Tt-_PByi6KM?autoplay=1&rel=0",
    channelUrl: "https://www.youtube.com/@birlasparvai",
    featuredTitle: "New Mahindra Thar OG 2026 Detailed Drive & Off-Road Tamil Review",
    badge: "Official Channel",
    description: "High-retention visual documentaries, long-form journalism, and cinematic automotive retrospectives engineered for organic viral distribution.",
    latestVideoId: "Tt-_PByi6KM",
    latestVideoTitle: "New Mahindra Thar OG 2026 Detailed Drive & Off-Road Tamil Review | Birla’s Parvai"
  },
  {
    id: "supratha-wellness",
    name: "Supratha Wellness",
    handle: "@SuprathaWellness",
    category: "Clinical Healthcare & Holistic Medicine",
    totalViews: "3.2M+",
    subscribers: "85K+",
    thumbnail: "https://i.ytimg.com/vi/b_g430s1Jr4/hq720.jpg",
    videoUrl: "https://www.youtube.com/embed/b_g430s1Jr4?autoplay=1&rel=0",
    channelUrl: "https://www.youtube.com/@SuprathaWellness",
    featuredTitle: "6 Common Problems & First Aid Tips | பொதுவான பிரச்சனைகளுக்கு முதலுதவி",
    badge: "Healthcare IP",
    description: "Approachable clinical wellness breakdowns, physician masterclasses, and kinetic medical animations that establish institutional trust.",
    latestVideoId: "b_g430s1Jr4",
    latestVideoTitle: "6 Common Problems & First Aid Tips | 6 பொதுவான பிரச்சனைகளுக்கு முதலுதவி டிப்ஸ்"
  },
  {
    id: "frameless-media",
    name: "Frameless Media",
    handle: "@Framelessmediatamil",
    category: "Cinema Interviews, FDFS & Cultural Public Talk",
    totalViews: "2.4M+",
    subscribers: "60K+",
    thumbnail: "https://i.ytimg.com/vi/iZa8A_V4z7Y/hq720.jpg",
    videoUrl: "https://www.youtube.com/embed/iZa8A_V4z7Y?autoplay=1&rel=0",
    channelUrl: "https://www.youtube.com/@Framelessmediatamil",
    featuredTitle: "Santhanam DD Next Level Movie Public Talk – Makkal Reaction",
    badge: "Studio Flagship",
    description: "High-energy cinema public talk, director and actor interviews, FDFS fan reviews, and pop culture broadcast formats produced by Frameless Hub.",
    latestVideoId: "iZa8A_V4z7Y",
    latestVideoTitle: "Santhanam DD Next level Movie Public Talk – Makkal Reaction Vera Level! 🔥😂"
  }
];

export const YOUTUBE_PERFORMANCE_METRICS = {
  totalViews: "10M+",
  metricLabel: "Total Verified Views",
  channelsCount: "3",
  primaryFocus: "Algorithmic Retention & Channel Architecture"
};
