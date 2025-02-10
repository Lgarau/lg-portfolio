import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "../Slider/Slider"

// Importa le immagini
import image3 from "../assets/foto/3.png";
import image4 from "../assets/foto/4.png";
import image5 from "../assets/foto/5.png";
import image6 from "../assets/foto/6.png";
import image7 from "../assets/foto/7.png";
import image8 from "../assets/foto/8.png";
import image9 from "../assets/foto/9.png";
import image10 from "../assets/foto/10.png";
import image11 from "../assets/foto/11.png";
import image12 from "../assets/foto/12.png";
import image13 from "../assets/foto/13.png";
import image14 from "../assets/foto/14.png";
import image15 from "../assets/foto/15.png";
import image16 from "../assets/foto/16.png";
import Logo1 from "../assets/graphics/1.jpg"
import change1 from "../assets/graphics/2.jpg"
import change2 from "../assets/graphics/3.jpg"
import Logo2 from "../assets/graphics/4.jpg"
import para1 from "../assets/graphics/5.jpg"
import para2 from "../assets/graphics/6.jpg"
import Logo3 from "../assets/graphics/7.jpg"
import out1 from "../assets/graphics/8.jpg"
import out2 from "../assets/graphics/9.jpg"
import video from "../assets/video/Showreel.mp4"

const Projects = () => {
  
  const images = [
    
    { src: image3, alt: 'Photography', type: 'Photography' },
    { src: image4, alt: 'Photography', type: 'Photography' },
    { src: image5, alt: 'Photography', type: 'Photography' },
    { src: image6, alt: 'Photography', type: 'Photography' },
    { src: image7, alt: 'Photography', type: 'Photography' },
    { src: image8, alt: 'Photography', type: 'Photography' },
    { src: image9, alt: 'Photography', type: 'Photography' },
    { src: image10, alt: 'Photography', type: 'Photography' },
    { src: image11, alt: 'Photography', type: 'Photography' },
    { src: image12, alt: 'Photography', type: 'Photography' },
    { src: image13, alt: 'Photography', type: 'Photography' },
    { src: image14, alt: 'Photography', type: 'Photography' },
    { src: image15, alt: 'Photography', type: 'Photography' },
    { src: image16, alt: 'Photography', type: 'Photography' },
  ];

  const videos = [
    { src: video, alt: 'Video 1', type: 'Video' }
  ];

  const graphics = [
    { src: Logo1, alt: 'Graphic 1', type: 'Graphics' },
    { src: change1, alt: 'Graphic 2', type: 'Graphics' },
    { src: change2, alt: 'Graphic 2', type: 'Graphics' },
    { src: Logo2, alt: 'Graphic 1', type: 'Graphics' },
    { src: para1, alt: 'Graphic 2', type: 'Graphics' },
    { src: para2, alt: 'Graphic 2', type: 'Graphics' },
    { src: Logo3, alt: 'Graphic 1', type: 'Graphics' },
    { src: out1, alt: 'Graphic 2', type: 'Graphics' },
    { src: out2, alt: 'Graphic 2', type: 'Graphics' },
  ];

  const allContent = [
    { title: 'Photography', items: images },
    { title: 'Video', items: videos },
    { title: 'Graphics', items: graphics },
  ];

  return (
    <section
      id="projects"
      className="px-4 flex flex-col min-h-screen w-full items-center justify-center py-16 md:px-12"
    >
      {allContent.map((content, index) => (
        <CustomSlider key={index} items={content.items} title={content.title} />
      ))}
    </section>
  );
};

export default Projects;