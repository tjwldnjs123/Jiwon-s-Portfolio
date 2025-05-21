
import React from "react";
import data from "../data/career.json";

const Career = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Career</h2>
      <div className="space-y-8">
        {data.career.map((item, idx) => (
          <div key={idx} className="p-6 bg-white dark:bg-gray-700 rounded shadow">
            <div className="flex items-center mb-4">
              <img
                src={item.img}
                alt={item.company}
                className="w-20 h-20 rounded-full mr-4 bg-white p-1 object-contain border"
              />
              <div>
                <h3 className="text-xl font-semibold">{item.company}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{item.period}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mb-4">{item.description}</p>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-100">
              {item.contents.map((part, i) => (
                <div key={i}>
                  <strong className="block">{part.title}</strong>
                  <ul className="list-disc ml-5">
                    {part.contents.map((line, j) => (
                      <li key={j}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
