import React from "react";
import classes from "./About.module.css";
import { Carousel } from 'react-responsive-carousel';

const whoTexts = [
  {
    key: "1",
    Title: "Who we are?",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, numquam delectus. Recusandae eveniet esse asperiores saepe magnam, itaque, illum accusantium laborum mollitia porro dolorem illo libero aut, officiis doloribus ipsa.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, numquam delectus. Recusandae eveniet esse asperiores saepe magnam, itaque, illum accusantium laborum mollitia porro dolorem illo libero aut, officiis doloribus ipsa."
  },
  {
    key: "2",
    Title: "What we do?",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, numquam delectus. Recusandae eveniet esse asperiores saepe magnam, itaque, illum accusantium laborum mollitia porro dolorem illo libero aut, officiis doloribus ipsa.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, numquam delectus. Recusandae eveniet esse asperiores saepe magnam, itaque, illum accusantium laborum mollitia porro dolorem illo libero aut, officiis doloribus ipsa."
  },
  {
    key: "3",
    Title: "How statisfy our Clients?",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, numquam delectus. Recusandae eveniet esse asperiores saepe magnam, itaque, illum accusantium laborum mollitia porro dolorem illo libero aut, officiis doloribus ipsa.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, numquam delectus. Recusandae eveniet esse asperiores saepe magnam, itaque, illum accusantium laborum mollitia porro dolorem illo libero aut, officiis doloribus ipsa."
  },
];

const About = () => {
  return (
    <div>
      <div className={classes.title}>
        <h3>About Us<span className={classes.underline}></span></h3>
      </div>
      <div className={classes.mason}>
        <div className={classes.masonImage}>
          <img src={process.env.PUBLIC_URL + "./assets/about.png"} alt="Greendoors-Paint" />
        </div>
        <div className={classes.masonDescription}>
          <h2>Looking For Home Painters who will decorate your Home no Other?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, earum. Corporis aperiam libero laboriosam totam voluptates placeat amet harum delectus earum cum, sequi necessitatibus magnam inventore non officiis ex aut.
            Numquam illum iusto, minima maxime in minus cupiditate fugiat suscipit perferendis exercitationem reiciendis sunt officia quod, nostrum enim animi praesentium, voluptate harum. Incidunt ea modi vel doloribus. Dignissimos, reprehenderit. Corporis!
            Nostrum et pariatur ullam. Repudiandae ratione atque incidunt. Nemo quod voluptatibus atque unde in, velit nulla saepe exercitationem. Enim velit harum quisquam perferendis reprehenderit dignissimos aliquam ea inventore qui repellendus?</p>
          <button className={classes.serviceBtn}><a href="/gallery">Explore Gallery</a></button>
        </div>
      </div>
      <div className={classes.aboutSection}>
        <div className={classes.aboutSectionCarousel}>
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            width={'100%'}
            showThumbs={false}
            interval={3000}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
          >
            {whoTexts.map((item) => (
              <div className={classes.aboutSectionCarouselTexts}>
                <h3>{item.Title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </Carousel>
          <button className={classes.aboutBtn}><a href="/about">About Us</a></button>
        </div>
        <div className={classes.aboutSectionImage}>
          <img src={process.env.PUBLIC_URL + "assets/about-section-carousel.png"} alt="about-section-carousel" />
        </div>
      </div>
    </div>
  );
};

export default About;