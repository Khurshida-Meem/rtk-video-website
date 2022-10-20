import axios from "axios";
import axiosInstance from "../../utils/axios";

export const getVideo = async (id) => {
  const response = await axiosInstance.get(`/videos/${id}`);
  return response.data;
};

export const updateReaction = async ({ id, reaction }) => {
  const { data } = await axios.get(`/videos/${id}`);
  if (data) {
    let updatedReaction =
      reaction === "like"
        ? { likes: data.likes + 1 }
        : { unLikes: data.unLikes + 1 };

        // const response = await
  }
};
