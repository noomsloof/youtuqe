export interface Video {
    id: string;
    snippet: {
      title: string;
      description: string;
      thumbnails: { medium: { url: string }; };
      channelTitle: string;
      channelId: string;
      publishedAt: string;
    };
    statistics: {
      viewCount: string;
    };
    channelThumbnail?: string;
  }
  