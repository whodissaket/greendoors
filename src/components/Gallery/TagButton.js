import { Categories } from "./GalleryElements";

const TagButton = ({ name, handleSetTag }) => {
  return (
    <Categories onClick={() => handleSetTag(name)}>
      {name.toUpperCase()}
    </Categories>
  );
};
export default TagButton;
