import { Categories } from "./GalleryElements";
import "./TagButton.css";

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <Categories
      className={`${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name}
    </Categories>
  );
};
export default TagButton;
