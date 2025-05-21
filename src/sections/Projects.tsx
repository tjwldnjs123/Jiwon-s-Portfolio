import React from "react";
import projects from "../data/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto relative">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

      <div className="absolute top-[55%] left-0 z-10">
        <button className="swiper-button-prev text-gray-700 dark:text-gray-300 text-3xl px-2">
          ❮
        </button>
      </div>
      <div className="absolute top-[55%] right-0 z-10">
        <button className="swiper-button-next text-gray-700 dark:text-gray-300 text-3xl px-2">
          ❯
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!px-8 min-h-[600px] pb-8"
      >
        {projects.projects.map((p, idx) => (
         <SwiperSlide key={idx} className="h-full">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 h-full flex flex-col justify-between min-h-[550px]">
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-8">
              {p.content}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {p.period} / {p.personnel}
            </p>
            <div className="text-xs mt-2 flex flex-wrap gap-1">
              {p.stack.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-sm mt-3 block"
            >
              GitHub
            </a>
          </div>
       </SwiperSlide>
       
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
