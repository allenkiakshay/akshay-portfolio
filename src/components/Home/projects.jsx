import ProjectCard from "./cards/projectCard";

const Projects = ({ count }) => {
  const projectList = [
    {
      title: "Automatic Speech Recognition",
      links: [
        {
          name: "Frontend",
          url: "https://github.com/allenkiakshay/asr-web-portal-frontend",
        },
        {
          name: "Backend",
          url: "https://github.com/allenkiakshay/ASR_BACKEND",
        },
      ],
      description:
        "A speech recognition app that uses Python and JavaScript to transcribe and translate audio files.",
      techStack: "Python, React.js, Flask, AWS, Redis, Sqlite3, whisperX",
      imageUrl: "/projects/asr-portal.avif",
    },
    {
      title: "VIT-AP Website",
      links: [
        {
          name: "Live",
          url: "https://vitap.ac.in",
        },
        {
          name: "credits",
          url: "https://vitap.ac.in/credits",
        },
      ],
      description:
        "The official website of VIT-AP University, built using Next.js and Tailwind CSS.",
      techStack: "Next.js, Tailwind CSS, Strapi.js, AWS",
      imageUrl: "/projects/vitap-website.avif",
    },
  ];

  const displayedProjects = count ? projectList.slice(0, count) : projectList;

  return (
    <div className="relative flex flex-col items-center w-[100vw] h-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      {displayedProjects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          urls={project.links}
          description={project.description}
          techStack={project.techStack}
          imageUrl={project.imageUrl}
        />
      ))}

      {count && (
        <a
          href="/projects"
          className="font-medium mt-4 hover:underline"
        >
          View More
        </a>
      )}
    </div>
  );
};

export default Projects;
