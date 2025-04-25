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
    {
      title: "VITopia Website",
      links: [
        {
          name: "Live",
          url: "https://vitopia.vitap.ac.in",
        },
      ],
      description:"Built a QR-based ticketing system for VITopia 2024 & 2025, enabling fraud-free, rapid entry for 50,000+ attendees and automating logistics and communication.",
      techStack: "Next.js, Tailwind CSS, Prisma ORM, AWS,PostgresSQL",
      imageUrl: "/projects/vitopia.avif",
    },
    {
      title:"Pothole Detection",
      links:[],
      description:"Developed a real-time pothole detection system using YOLOv8 on Jetson Nano with 97.3% mAP@50, enhancing road maintenance through high-accuracy detection.",
      techStack:"Python, OpenCV, YOLOv8,NVIDIA Jetson Nano",
      imageUrl:"/projects/pothole.avif",
    },
    {
      title:"Certificate Generator",
      links:[
        {
          name: "Live",
          url: "https://certificate-generator.csivitap.co.in/",
        },
        {
          name: "Github",
          url: "https://github.com/CSI-VIT-AP/Certificate-Generator-V.2.0",
        },
      ],
      description:"Launched a Certificate Generator web application, leveraging Next.js and Tailwind CSS for the front-end personally resolved 15+ bugs within the first week, ensuring optimal performance on Vercel",
      techStack:"Next.js,React.Js,Typescript,Tailwind CSS.",
      imageUrl:"/projects/certificate_generator.avif",
    },
    {
      title:"Resume Builder",
      links:[
        {
          name: "Live",
          url: "https://resumebuilder.csivitap.co.in/",
        },
        {
          name: "Github",
          url: "https://github.com/CSI-VIT-AP/CSI-Resume-Builder",
        },
      ],
      description:"Conceptualized and coded a full-stack Resume Builder application, integrating Firebase authentication and Redux for state management, which had 50 sign-ups in the first week, demonstrating immediate user adoption.",
      techStack:"React.js, Redux, Firebase, Tailwind CSS,JavaScript",
      imageUrl:"/projects/resume_builder.avif",
    }
  ];

  const displayedProjects = count ? projectList.slice(0, count) : projectList;

  return (
    <div className="relative flex flex-col items-center w-[100vw] h-auto p-4">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="text-lg text-center mb-8">Count: {projectList.length}</p>
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
        <a href="/projects" className="font-medium mt-4 hover:underline">
          View More
        </a>
      )}
    </div>
  );
};

export default Projects;
