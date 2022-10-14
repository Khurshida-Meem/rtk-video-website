import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../redux/videos/videosSlice';
import videoReducer from '../redux/video/videoSlice';
import tagReducer from "../redux/tags/tagSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    tags: tagReducer,
  },
});
