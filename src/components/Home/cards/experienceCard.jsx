const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  techStack,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg m-4 p-6 w-full sm:w-[90%] md:w-[75%] lg:w-[50%] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Experience Details */}
      <h2 className="text-2xl font-bold mb-3 text-black">{title}</h2>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">{company}</span> |{" "}
        <span className="italic text-gray-500">{duration}</span>
      </p>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="font-medium text-gray-800">
        {techStack ? "Tech Stack:" : ""}
        <span className="font-semibold text-gray-900"> {techStack}</span>
      </p>
    </div>
  );
};

export default ExperienceCard;
