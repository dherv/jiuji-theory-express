export interface CreateVideoDto {
  title: string;
  description: string;
  youtubeId: string;
  technique: { id: number };
}

export interface VideosSearchBodyDto {
  q: string;
  maxResults: number;
}

export interface VideoYoutubeDto {
  youtubeId: string;
  title: string;
  description: string;
}
