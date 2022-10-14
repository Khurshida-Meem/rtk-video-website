import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../redux/relatedVideos/relatedVideosSlice";
import Loading from "../ui/loading";
import RelatedVideo from "./related-vdo";

const RelatedVideos = ({ currentVideoId , tags}) => {

  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector((state) => state.relatedVideos);

  useEffect(() => {
    dispatch(fetchRelatedVideos({tags, id:currentVideoId}))
  }, [dispatch, tags, currentVideoId]);

  let content=null;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && !isLoading && relatedVideos?.length===0) {
    content = <div className="col-span-12">No Related Video Found</div>;
  }
  if (!isLoading && !isLoading && relatedVideos?.length>0) {
    content = relatedVideos.map((video) => <RelatedVideo key={video.id} video={video} />);
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideos;
