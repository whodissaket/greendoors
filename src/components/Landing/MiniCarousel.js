import React, { useState, useEffect } from "react";
import classes from "./MiniCarousel.module.css";
import { Carousel } from 'react-responsive-carousel';

const images = [
  { id: "1", ImageName: "mini1.jpg", tag: "Mini Carousel Images" },
  { id: "2", ImageName: "mini2.jpg", tag: "Mini Carousel Images" },
  { id: "3", ImageName: "mini3.jpg", tag: "Mini Carousel Images" },
  { id: "4", ImageName: "mini4.jpg", tag: "Mini Carousel Images" },
];

const imagePosition = {
  "right": "0"
}

const MiniCarousel = () => {
  const [tag, setTag] = useState("All");
  const [miniImages, setMiniImages] = useState([]);

  useEffect(() => {
    tag === "All"
      ? // displays all images
      setMiniImages(images)
      : // displays images with tag
      setMiniImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div>
      <Carousel
        autoPlay={true}
        width={'25%'}
        showThumbs={false}
        interval={2000}
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        className={classes.imageCarousel}>
        {miniImages.map((image) => (
          <a href={`/assets/${image.ImageName} `} alt="">
            <img className={classes.photo} key={image.id} src={`/assets/${image.ImageName} `} alt="" />
          </a>
        ))}
      </Carousel>
      <Carousel
        autoPlay={true}
        width={'40%'}
        showThumbs={false}
        interval={2000}
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        className={classes.imageCarouselSecondary}>
        {miniImages.map((image) => (
          <a href={`/assets/${image.ImageName} `} alt="">
            <img className={classes.photo} key={image.id} src={`/assets/${image.ImageName} `} alt="" />
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default MiniCarousel;