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
      duration: "SEP 2023 - NA",
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
      duration: "SEP 2024 - NA",
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
    <div className="relative flex flex-col items-center w-[100vw] h-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
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
        <a className="hover:underline mt-4" href="/experience">
          View More
        </a>
      )}
    </div>
  );
};

export default Experience;
