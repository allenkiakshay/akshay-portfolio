"use client";

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  techStack,
}) => {
  return (
    <div className="group relative border-l-4 border-blue-500 dark:border-blue-400 rounded-r-2xl shadow-lg hover:shadow-2xl m-3 p-5 w-full sm:w-[90%] md:w-[75%] lg:w-[55%] transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-gray-800/50 backdrop-blur-sm before:absolute before:left-[-8px] before:top-6 before:w-4 before:h-4 before:bg-blue-500 dark:before:bg-blue-400 before:rounded-full before:border-4 before:border-white dark:before:border-gray-900 hover:border-purple-500 dark:hover:border-purple-400 before:transition-all before:duration-300 hover:before:bg-purple-500 dark:hover:before:bg-purple-400">
      {/* Duration Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {duration}
        </span>
      </div>

      {/* Experience Details */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h2>
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        {company}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>
      
      {techStack && (
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.split(',').map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
