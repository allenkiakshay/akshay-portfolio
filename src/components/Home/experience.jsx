import ExperienceCard from "./cards/experienceCard";

const Experience = ({ count }) => {
  const experienceList = [
    {
      title: "Software Developer Intern",
      company: "Tech Solutions",
      duration: "May 2024 - Aug 2024",
      description:
        "Worked on developing web applications using React.js and Node.js. Contributed to improving the performance of the app and optimizing the database queries.",
      techStack: "React.js, Node.js, MongoDB",
      companyLogo: "https://yourimageurl.com/tech-solutions-logo.jpg",
    },
    {
      title: "Frontend Developer",
      company: "WebDev Co.",
      duration: "Jan 2023 - Apr 2023",
      description:
        "Developed and maintained the frontend of the company's e-commerce platform, ensuring responsive design and smooth user experience.",
      techStack: "Next.js, Tailwind CSS, Stripe",
      companyLogo: "https://yourimageurl.com/webdev-logo.jpg",
    },
    {
      title: "Software Developer Intern",
      company: "Tech Solutions",
      duration: "May 2024 - Aug 2024",
      description:
        "Worked on developing web applications using React.js and Node.js. Contributed to improving the performance of the app and optimizing the database queries.",
      techStack: "React.js, Node.js, MongoDB",
      companyLogo: "https://yourimageurl.com/tech-solutions-logo.jpg",
    },
    {
      title: "Frontend Developer",
      company: "WebDev Co.",
      duration: "Jan 2023 - Apr 2023",
      description:
        "Developed and maintained the frontend of the company's e-commerce platform, ensuring responsive design and smooth user experience.",
      techStack: "Next.js, Tailwind CSS, Stripe",
      companyLogo: "https://yourimageurl.com/webdev-logo.jpg",
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
          companyLogo={experience.companyLogo}
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
