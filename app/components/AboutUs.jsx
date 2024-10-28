import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <section className="p-4 my-8 md:p-10 xl:w-[85%] 2xl:w-[70%] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="md:flex-[55%]">
          <h2 className="font-bold text-3xl md:text-4xl  md:mb-8">
            Get to know us
          </h2>
          <p className="font-medium text-lg md:leading-8">
            At Shango Tours, we specialize in revealing {"Jamaica's"} hidden
            gems, offering curated experiences that highlight the island’s
            natural beauty, rich culture, and vibrant heritage. From airport
            transfers to beach getaways and cultural immersions, we provide
            personalized, expertly guided tours for every type of traveler. Let
            us guide you on an unforgettable journey through {"Jamaica's"}{" "}
            breathtaking landscapes and iconic landmarks, with your comfort and
            convenience at the heart of every adventure.
          </p>{" "}
        </div>
        <div className="relative w-90 h-72 md:flex-[45%] md:mt-14 md:h-[22rem] ">
          <Image
            alt="Image of Founder with clients from Jamaica Eternal Tours"
            src="/local/hero-1.jpg"
            fill={true}
            className="object-cover"
          ></Image>
        </div>
      </div>
      <div className="flex mt-20 md:mt-20  flex-col md:flex-row justify-between gap-4">
        <div className="md:flex-[50%]">
          <h3 className="font-bold text-3xl md:mb-8 mb-4">Our Mission</h3>
          <p className="font-medium text-base md:leading-7">
            To empower travelers to explore {"Jamaica's "}finest tours,
            fostering meaningful connections and creating unforgettable
            experiences, all while promoting responsible and sustainable
            tourism.
          </p>
        </div>
        <div className="md:flex-[50%]">
          <h3 className="font-bold text-3xl md:mb-8 mb-4">Our Vision</h3>
          <p className="font-medium text-base md:leading-7">
            To inspire transformative adventures in Jamaica, cultivating an
            appreciation for diverse cultures and contributing to a more
            sustainable and interconnected world through the joy of travel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
