import ProjectCard from "./projectCard";

const Projects = () => {
  const projectList = [
    {
      title: "Automatic Speech Recognition",
      githubUrl: "https://github.com/yourusername/asr-project",
      liveUrl: "https://asr-live.com",
      description:
        "A speech recognition app that uses Python and JavaScript to transcribe and translate audio files.",
      techStack: "Python, React.js, Flask, AWS",
      imageUrl: "https://yourimageurl.com/asr-project.jpg",
    },
    {
      title: "E-commerce Platform",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-platform-live.com",
      description:
        "An e-commerce store built with Next.js and integrated with Stripe for payments.",
      techStack: "Next.js, Tailwind CSS, Stripe",
      imageUrl: "https://yourimageurl.com/ecommerce-project.jpg",
    },
  ];

  return (
    <div className="relative flex flex-col items-center w-[100vw] h-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      {projectList.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
          description={project.description}
          techStack={project.techStack}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
};

export default Projects;
