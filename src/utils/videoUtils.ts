import { EpisodeMetadata } from "../types";
import { blackHoles, dandiVideos, defaultVideos, taxation, waterCycle } from "../videosMetadata";

export const getVideosForPrompt = (prompt: string): EpisodeMetadata[] => {
  const lowerPrompt = prompt.toLowerCase();
  if (lowerPrompt.includes("dandi")) {
    return dandiVideos;
  } else if (lowerPrompt.includes("tax") || lowerPrompt.includes("taxation")) {
    return taxation;
  } else if (
    lowerPrompt.includes("blackhole") ||
    lowerPrompt.includes("black hole") ||
    lowerPrompt.includes("holes")
  ) {
    return blackHoles;
  } else if (
    lowerPrompt.includes("water") ||
    lowerPrompt.includes("water cycle") ||
    lowerPrompt.includes("cycle")
  ) {
    return waterCycle;
  }
  return defaultVideos;
};

export const getRecommendedVideos = (videos: EpisodeMetadata[]): EpisodeMetadata[] => {
    if (videos === dandiVideos) {
      return [
        {
          id: 1,
          title: "Gandhi's Philosophy",
          duration: "18:30",
          thumbnail: "video_assets/dandi/recommendations/thumbnails/1.jpeg",
          views: 25678,
          uploadDate: "3 days ago",
        },
        {
          id: 2,
          title: "Indian Independence Movement",
          duration: "22:15",
          thumbnail: "public/video_assets/dandi/recommendations/thumbnails/2.jpg",
          views: 18943,
          uploadDate: "5 days ago",
        },
        {
          id: 3,
          title: "Civil Disobedience",
          duration: "20:45",
          thumbnail: "public/video_assets/dandi/recommendations/thumbnails/3.jpg",
          views: 32145,
          uploadDate: "1 week ago",
        },
      ];
    } else if (videos === taxation) {
      return [
        {
          id: 1,
          title: "Financial Planning",
          duration: "16:30",
          thumbnail: "video_assets/taxation/recommendations/thumbnails/1.jpeg",
          views: 14567,
          uploadDate: "2 days ago",
        },
        {
          id: 2,
          title: "Investment Strategies",
          duration: "19:45",
          thumbnail: "video_assets/taxation/recommendations/thumbnails/2.jpeg",
          views: 21345,
          uploadDate: "4 days ago",
        },
        {
          id: 3,
          title: "Wealth Management",
          duration: "23:15",
          thumbnail: "video_assets/taxation/recommendations/thumbnails/3.jpeg",
          views: 18765,
          uploadDate: "1 week ago",
        },
      ];
    } else if (videos === blackHoles) {
      return [
        {
          id: 5,
          title: "The Event Horizon",
          duration: "15:45",
          thumbnail: "video_assets/black_hole/recommendations/thumbnails/1.jpeg",
          views: 12345,
          uploadDate: "2 days ago",
        },
        {
          id: 6,
          title: "Singularities Explained",
          duration: "18:20",
          thumbnail: "video_assets/black_hole/recommendations/thumbnails/2.jpeg",
          views: 15678,
          uploadDate: "4 days ago",
        },
        {
          id: 7,
          title: "Hawking Radiation",
          duration: "20:10",
          thumbnail: "video_assets/black_hole/recommendations/thumbnails/3.jpeg",
          views: 19876,
          uploadDate: "1 week ago",
        },
      ];
    } else if (videos === waterCycle) {
      return [
        {
          id: 5,
          title: "Evaporation and Condensation",
          duration: "14:30",
          thumbnail: "video_assets/water_cycle/recommendations/thumbnails/1.jpeg",
          views: 13456,
          uploadDate: "2 days ago",
        },
        {
          id: 6,
          title: "Precipitation Explained",
          duration: "16:45",
          thumbnail: "video_assets/water_cycle/recommendations/thumbnails/2.jpg",
          views: 16789,
          uploadDate: "4 days ago",
        },
        {
          id: 7,
          title: "The Role of Oceans",
          duration: "19:15",
          thumbnail: "video_assets/water_cycle/recommendations/thumbnails/3.jpg",
          views: 18976,
          uploadDate: "1 week ago",
        },
      ];
    } else {
      return [
        {
          id: 5,
          title: "Tech Innovations",
          duration: "17:30",
          thumbnail: "video_assets/default/recommendations/thumbnails/1.jpeg",
          views: 16789,
          uploadDate: "2 days ago",
        },
        {
          id: 6,
          title: "Digital Transformation",
          duration: "21:15",
          thumbnail: "video_assets/default/recommendations/thumbnails/2.jpeg",
          views: 19876,
          uploadDate: "5 days ago",
        },
        {
          id: 7,
          title: "Future Tech Trends",
          duration: "24:45",
          thumbnail: "video_assets/default/recommendations/thumbnails/3.png",
          views: 23456,
          uploadDate: "1 week ago",
        },
      ];
    }
  };
  