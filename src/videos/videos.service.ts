import { GaxiosPromise } from 'gaxios';
import { google, youtube_v3 } from 'googleapis';
import { IRepository, IVideoService } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';
import {
  CreateVideoDto,
  VideosSearchBodyDto,
  VideoYoutubeDto,
} from './dto/videos.dto';
import { Video } from './types/videos.types';

export const searchYoutube = async (
  body: VideosSearchBodyDto
): Promise<GaxiosPromise<youtube_v3.Schema$SearchListResponse>> => {
  const { q, maxResults } = body;
  const youtube = google.youtube({
    version: 'v3',
    auth: process.env.GOOGLE_API_YOUTUBE_KEY,
  });
  console.log('CALLED');
  try {
    return await youtube.search.list({
      q,
      part: ['snippet'],
      maxResults,
    });
  } catch (error) {
    console.error('Execute error', error);
    return error;
  }
};

const videosService = (videosRepository: IRepository): IVideoService => {
  return {
    findAll: async (): Promise<Video[]> => {
      return await videosRepository.findAll();
    },
    findOne: async (id: number): Promise<Video> => {
      return await videosRepository.findOne(id);
    },
    create: async (body: CreateVideoDto, user: ReqUser): Promise<Video> => {
      return await videosRepository.create(body, user);
    },
    update: async (
      body: CreateVideoDto,
      id: number,
      user: ReqUser
    ): Promise<Partial<Video>> => {
      return await videosRepository.update(body, id, user);
    },
    delete: async (id: number): Promise<void> => {
      return await videosRepository.delete(id);
    },
    search: async (body: VideosSearchBodyDto): Promise<VideoYoutubeDto[]> => {
      const response = await searchYoutube(body);
      let youtubeVideos = [] as VideoYoutubeDto[];
      if (response.data.items) {
        youtubeVideos = response.data.items.map((video: any) => ({
          youtubeId: video.id.videoId,
          title: video.snippet.title,
          description: video.snippet.description,
        }));
      }
      return youtubeVideos;
    },
  };
};

export default videosService;
