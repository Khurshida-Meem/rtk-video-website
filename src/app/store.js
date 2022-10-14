import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../redux/videos/videoSlice';
import tagReducer from "../redux/tags/tagSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagReducer,
  },
});
