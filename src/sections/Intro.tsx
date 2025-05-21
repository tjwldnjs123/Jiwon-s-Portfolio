
import React from "react";

const Intro = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate__animated animate__fadeInUp">
        안녕하세요 👋 저는 서지원입니다.
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 animate__animated animate__fadeInUp animate__delay-1s">
        프론트엔드 개발자 • React • TypeScript • TailwindCSS
      </p>
    </section>
  );
};

export default Intro;
