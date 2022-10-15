import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../redux/tags/tagSlice";
import { tagRemoveAll } from "../../redux/filter/filterSlice";
import Tag from "./tag";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const handleRemoveAll = () => {
    dispatch(tagRemoveAll());
  };

  return tags.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.title} />
        ))}
      </div>
      <button
        onClick={handleRemoveAll}
        className="bg-blue-600 text-white px-4 pb-1 rounded-full cursor-pointer"
      >
        Clear Filters
      </button>
    </section>
  ) : null;
};

export default Tags;
