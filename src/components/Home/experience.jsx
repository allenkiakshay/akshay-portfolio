import ExperienceCard from "./cards/experienceCard";

const Experience = ({ count }) => {
  const experienceList = [
    {
      title: "Software Developer Intern",
      company: "Indian Institute of Technology, Bombay",
      duration: "May 2023 - May 2024",
      description:
        "Worked on automated speech recognition using deep learning techniques and Neural Networks. Developed an application that integrates the model to convert speech to text.",
      techStack:
        "React.js, Python3, SQLite, AWS, WhisperX, Transformers, PyTorch, pydub",
    },
    {
      title: "Software Developer Intern",
      company: "VIT-AP University",
      duration: "SEP 2023 - SEP 2024",
      description:
        "Developed Official Website of VIT-AP University. Worked on developing web applications using Latest Technologies. Contributed to improving the performance of the app and optimizing the database queries.Deployed the website on AWS.",
      techStack: "Next.js, Tailwind CSS, Strapi.js, AWS, Postgres SQL",
    },
    {
      title: "Software Developer Intern",
      company: "TimeseraErp Software Solutions",
      duration: "May 2024 - Dec 2024",
      description:
        "Worked on Backend Development of the company's Products. Developed and maintained the backend of the company's software platforms, ensuring responsive design and smooth user experience.Worked on Devops and CI/CD pipelines.",
      techStack: "Next.js, Angular, MS SQL, Microsoft Azure",
    },
    {
      title: "Software Developer Intern",
      company: "Navigate Labs AI",
      duration: "SEP 2024 - FEB 2025",
      description:
        "Developing a AI based code editor that can help developers to write code faster and more efficiently. Worked on developing web applications using Latest Technologies.",
      // techStack: "Next.js, Tailwind CSS, Stripe",
    },
    {
      title: "Web Development Team Lead",
      company: "MLC Chapter VIT-AP",
      duration: "SEP 2024 - NA",
      description:
        "Led a team of 10 members to develop a web application for the college fest. Conducted workshops on Web Development and Competitive Programming. Organized Hackathons and Coding Competitions.",
    },
    {
      title: "Technical Team Lead",
      company: "CSI Chapter VIT-AP",
      duration: "MAY 2023 - AUG 2024",
      description:
        "Led a team of 10 members to develop a web application for the college fest. Conducted workshops on Web Development and Competitive Programming. Organized Hackathons and Coding Competitions.",
    },
  ];

  const displayedExperiences = count
    ? experienceList.slice(0, count)
    : experienceList;

  return (
    <div className="relative flex flex-col items-center w-[100vw] h-auto p-4 py-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Experience
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Showcasing {count ? displayedExperiences.length : experienceList.length} of {experienceList.length} experiences
        </p>
      </div>

      {displayedExperiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          title={experience.title}
          company={experience.company}
          duration={experience.duration}
          description={experience.description}
          techStack={experience.techStack}
        />
      ))}

      {count && count < experienceList.length && (
        <a 
          className="group inline-flex items-center gap-2 px-6 py-3 mt-8 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105" 
          href="/experience"
        >
          View All Experience
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      )}
    </div>
  );
};

export default Experience;
