import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Hero6() {
  const images = [
    {
        
      src: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fclub-shoes.png&w=384&q=100",
      name:"Club Shoes",
   

    },
    {
      src: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fhoppister.png&w=384&q=100",
      name:"Hoppister",
      
    },
    {
      src: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Felegance.png&w=384&q=100",
      name:"Elegance",

    },
    {
      src: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Ffashadil.png&w=384&q=100",
      name:"Fashadil",
  
    },
    {
      src: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fshovia.png&w=384&q=100",
      name:"Shovia"
     
    },
 
    {
      src: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fhunter-shoes.png&w=384&q=100",
      name:"Hunter Shoes",
  
    },
    {
      src: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Ffusion.png&w=384&q=100",
      name:"Fusion",

    },
  ];

  return (
    <div className="hero6-slider">

        


          <div className="h1">
        <h1>Top Brands</h1>

          </div>

     <Swiper
  modules={[Navigation]}
  loop={true}
  speed={600}
  spaceBetween={5}
  slidesPerView={3}
  slidesPerGroup={1}
  navigation={{
    nextEl: ".hero6-next",
    prevEl: ".hero6-prev",
  }}
  breakpoints={{
    0: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    
    769: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1101: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  }}
  className="hero6-swiper"
>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="hero6-slide">
              <img
                src={image.src}
                alt={image.alt}
              />

              <p className="hero6-name">{image.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className="hero6-prev"
        aria-label="Previous"
      >
        ❮
      </button>

      <button
        type="button"
        className="hero6-next"
        aria-label="Next"
      >
        ❯
      </button>

    </div>
  );
}

export default Hero6;