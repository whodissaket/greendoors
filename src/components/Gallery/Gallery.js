import React, { useState, useEffect } from "react";
import TagButton from "./TagButton";
import {
  GalleryContainer,
  Image,
  ImageCard,
  CategoryContainer,
} from "./GalleryElements";
import { SRLWrapper } from "simple-react-lightbox";

const images = [
  { id: "1", ImageName: "int_1.jpeg", tag: "Interior Paint" },
  { id: "2", ImageName: "int_2.jpeg", tag: "Interior Paint" },
  { id: "3", ImageName: "int_3.jpeg", tag: "Interior Paint" },
  { id: "4", ImageName: "int_4.jpeg", tag: "Interior Paint" },
  { id: "5", ImageName: "int_5.jpeg", tag: "Interior Paint" },
  { id: "6", ImageName: "int_6.jpeg", tag: "Interior Paint" },

  { id: "7", ImageName: "ext_1.jpeg", tag: "Exterior Paint" },

  { id: "8", ImageName: "ext_2.jpeg", tag: "Exterior Paint" },
  { id: "9", ImageName: "ext_3.jpeg", tag: "Exterior Paint" },
  { id: "10", ImageName: "ext_4.jpeg", tag: "Exterior Paint" },
  { id: "11", ImageName: "kit_1.jpeg", tag: "Kitchen" },
  { id: "12", ImageName: "kit_2.jpeg", tag: "Kitchen" },
  { id: "13", ImageName: "kit_3.jpeg", tag: "Kitchen" },
  { id: "14", ImageName: "kit_4.jpeg", tag: "Kitchen" },
  { id: "15", ImageName: "oth_1.jpeg", tag: "Others" },
  { id: "16", ImageName: "oth_2.jpeg", tag: "Others" },
  { id: "17", ImageName: "oth_3.jpeg", tag: "Others" },
  { id: "18", ImageName: "oth_4.jpeg", tag: "Others" },
  { id: "19", ImageName: "oth_5.jpeg", tag: "Others" },
  { id: "20", ImageName: "kit_5.jpeg", tag: "Kitchen" },
];

const options = {
  caption: {
    showCaption: false,
  },
};

const Gallery = () => {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "All"
      ? // displays all images
        setFilteredImages(images)
      : // displays images with tag
        setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div to="/gallery">
      <CategoryContainer>
        <TagButton
          name="All"
          handleSetTag={setTag}
          tagActive={tag === "All" ? true : false}
        />
        <TagButton
          name="Interior Paint"
          handleSetTag={setTag}
          tagActive={tag === "Interior Paint" ? true : false}
        />
        <TagButton
          name="Exterior Paint"
          handleSetTag={setTag}
          tagActive={tag === "Exterior Paint" ? true : false}
        />
        <TagButton
          name="Kitchen"
          handleSetTag={setTag}
          tagActive={tag === "Kitchen" ? true : false}
        />
        <TagButton
          name="Others"
          handleSetTag={setTag}
          tagActive={tag === "Others" ? true : false}
        />
      </CategoryContainer>
      <SRLWrapper options={options}>
        <GalleryContainer>
          {filteredImages.map((image) => (
            <ImageCard key={image.id}>
              <a href={`/assets/${image.ImageName} `} alt="">
                <Image src={`/assets/${image.ImageName}`} alt="" />
              </a>
            </ImageCard>
          ))}
        </GalleryContainer>
      </SRLWrapper>
    </div>
  );
};
export default Gallery;
