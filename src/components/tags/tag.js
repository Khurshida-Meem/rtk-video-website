import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../redux/filter/filterSlice";

const Tag = ({ title }) => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filters);

  const isSelected = selectedTags.includes(title) ? true : false;

  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  return (
    <div
      onClick={handleSelect}
      className={`${
        isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 "
      } px-4 pb-1 rounded-full cursor-pointer`}
    >
      {title}
    </div>
  );
};

export default Tag;

