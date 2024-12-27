import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Matteo - Director of Design Operations, Autralia",
    text: "Great dealing with Nexus! Superb work provided, great dedication shown by the team. High quality work. Great communication throughout. Good English also. Thanks again and I look forward to working with you on the next project. Thanks again sir! All the best!",
    img: "assets/images/testimonial_01.jpg",
  },
  {
    id: 1,
    name: "Louis - owner of Dental Clinic, New York",
    text: "Super Kommunikativ, er ist auf jeden Wunsch eingegangen, einen besseren fiverr kann ich mir nicht vorstellen, Danke dir Shehroz !",
    img: "assets/images/testimonial_02.jpg",
  },
  {
    id: 1,
    name: "Hazel - Dog Training Trainer, Canada",
    text: "Excellent Guy! He Built the website perfectly within our budget and get it done fast! not only is he good with his craft but he is also very creative in the development.",
    img: "assets/images/images.jfif",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
