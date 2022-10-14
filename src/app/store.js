import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../redux/videos/videosSlice';
import videoReducer from '../redux/video/videoSlice';
import tagReducer from "../redux/tags/tagSlice";
import relatedVideosReducer from "../redux/relatedVideos/relatedVideosSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    tags: tagReducer,
  },
});
