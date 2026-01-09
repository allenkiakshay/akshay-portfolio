"use client";
import { useState } from "react";
import Image from "next/image";

const ProjectCard = ({ title, urls, description, techStack, imageUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl m-3 w-full sm:w-[90%] md:w-[75%] lg:w-[55%] flex flex-col md:flex-row p-5 transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-gray-800/50 backdrop-blur-sm">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <div className="relative overflow-hidden rounded-xl aspect-video md:aspect-square">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
          )}
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              <div className="text-center p-4">
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-500 dark:text-gray-400">Image not found</p>
              </div>
            </div>
          ) : (
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-2/3 md:pl-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3 md:line-clamp-none">
            {description}
          </p>
          <div className="mb-4">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Tech Stack:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {techStack.split(',').map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {urls?.map((url, index) => (
            <a
              key={index}
              href={url.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {url.name}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
