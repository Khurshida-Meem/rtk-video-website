import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videoSlice";
import Video from "./video";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            videos.map((video) => <Video key={video?.id} video={video} />)
          )}

          {isError && <div className="col-span-12">{error}</div>}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
