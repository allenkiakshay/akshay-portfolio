const ProjectCard = ({ title, urls, description, techStack, imageUrl }) => {
  return (
    <div className="border-2 rounded-lg shadow-lg m-4 w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col md:flex-row p-4">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/3">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-2/3 md:pl-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="font-semibold">Tech Stack: {techStack}</p>
        </div>

        <div className="mt-4 flex space-x-4">
          {urls?.map((url, index) => (
            <a
              key={index}
              href={url.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {url.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
